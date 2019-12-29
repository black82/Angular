import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Error} from 'tslint/lib/error';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AdminclientService {
    apiUrl = 'http://localhost:8081';
    httpOptionsHtml = {
        headers: new HttpHeaders({
            Accept: 'text/html'
        })
    };

    constructor(private client: HttpClient) {
    }

    colecttoweb(id: number): Observable<any> {
        console.log(id);
        return this.client.get(this.apiUrl + '/col/' + id, this.httpOptionsHtml).pipe(retry(1),
            catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
        if (!navigator.onLine) {
            return throwError(new Error(error.error));
        }
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(error.name +
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        return throwError(error);
    }
}
