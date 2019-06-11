import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Company} from '../DTO/CompanyDto';
import {FormGroup} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {subscribeOn} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  company: Company;

  createCompany() {

  }

  constructor(private http: HttpClient) {
  }

  searchByCity(url) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'json'
    });
    this.http.get(url, {headers}).subscribe(value => {

      }
    );

  }
}

