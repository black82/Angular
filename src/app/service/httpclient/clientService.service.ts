import {Injectable, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {


  basetUrl = 'http://localhost:8081';
  router: Router;
  @Output() errore: Error;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  notific: NotificationService;

  constructor(private http: HttpClient) {

  }

  GetCompanyOane(id): Observable<Company> {
    return this.http.get<Company>(this.basetUrl + '/get/' + id, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandler)
      );
  }

  getListCompany(param): Observable<Company[]> {
    return this.http.get<Company[]>(this.basetUrl + param, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );

  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(error.message);
  }
}


export class NotificationService {

  constructor(public snackBar: MatSnackBar) {
  }

  showSuccess(message: string): void {
    this.snackBar.open(message);
  }

  showError(message: string): void {


    this.snackBar.open(message, 'X', {panelClass: ['error']});
  }
}

