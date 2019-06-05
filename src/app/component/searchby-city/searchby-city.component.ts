import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';


@Component({
  selector: 'app-searchby-city',
  templateUrl: './searchby-city.component.html',
  styleUrls: ['./searchby-city.component.css']
})
export class SearchbyCityComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  notFound: string;
  city: string;
  companies: Company [];

  // searcBycity() {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     responseType: 'json'
  //   });
  // }

  ngOnInit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'json'
    });
    this.http.get<Company[]>('http://127.0.0.1:8081/activiti/' + this.city, {headers})
      .subscribe((response => {
        this.companies = response;
        if (response.length < 1) {
          this.notFound = 'Company not found';
        } else {
          this.companies = response;
        }
      }));
  }

}
