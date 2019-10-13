import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../DTO/CompanyDto';
import {retry} from 'rxjs/operators';


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

