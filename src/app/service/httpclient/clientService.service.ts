import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {catchError, retry, tap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  isLoggedIn = false;
  redirectUrl: string;

  apiUrl = 'http://localhost:8081';
  router: Router;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

  }

  GetCompanyOane(id): Observable<Company> {
    return this.http.get<Company>(this.apiUrl + '/get/' + id, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandler)
      );
  }

  getListCompany(param): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl + param, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );

  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/api/auth/' + 'login', data)
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }

  logout(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'signout')
      .pipe(
        tap(_ => this.isLoggedIn = false),
        catchError(this.handleError('logout', []))
      );
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/api/auth/' + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
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

    return throwError(error);
  }
}


