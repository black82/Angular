import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from './DTO/CompanyDto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }

  id: string;
  company: Company;
  response: any;

  searcById() {
    this.http.get('http://127.0.0.1:8081/get/' + this.id)
      .subscribe((response => {
        this.response = response;
        return response;
      }));
  }

}

