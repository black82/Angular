import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  notifier: NotificationService;
  basetUrl = 'http://localhost:8081';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) {

  }

  GetCompanyOane(id): Observable<Company> {
    return this.http.get<Company>(this.basetUrl + '/get/' + id, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      );
  }

  getListCompany(param): Observable<Company[]> {
    return this.http.get<Company[]>(this.basetUrl + param, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.errorHandl)
      );

  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    onmessageerror.apply(errorMessage);
    window.alert(errorMessage);
    this.notifier.showError(errorMessage);
    return throwError(errorMessage);
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

