import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-searchby-city',
  templateUrl: './searchby-city.component.html',
  styleUrls: ['./searchby-city.component.css']
})
export class SearchbyCityComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  city: string;
  response: any;

  searcBycity() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'json'
    });

    this.http.get('http://127.0.0.1:8081/get1000/' + this.city, {headers})
      .subscribe((response => {
        this.response = response;
        console.log(response);
      }));
  }

  ngOnInit() {
  }

}
