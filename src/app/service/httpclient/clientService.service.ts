import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

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
    return throwError(errorMessage);
  }

}




