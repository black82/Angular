import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Company} from '../DTO/CompanyDto';
import {FormGroup} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {retry, subscribeOn} from 'rxjs/operators';
import {__values} from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  company: Company;

  createCompany() {

  }

  constructor(private http: HttpClient) {
  }

  searchByCityConection(url) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'json'
    });
    return this.http.get<Company[]>(url)
      .pipe(
        retry(15)
      );
  }


}

