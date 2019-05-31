import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Rabotnik {
  id: LongRange;
  name: string;
  position: string;
  // tslint:disable-next-line:variable-name
  start_date: string;
  type: string;
  numer: string;
  city: string;
  firstname: string;
  flag: string;
  lastname: string;
  title: string;
  dismissed: number;
  // tslint:disable-next-line:variable-name
  end_date: string;
  maidenname: string;
  // tslint:disable-next-line:variable-name
  reference_no: number;
}

class Company {
  id: number;
  // tslint:disable-next-line:variable-name
  company_number: string;
  // tslint:disable-next-line:variable-name
  current_status: string;
  // tslint:disable-next-line:variable-name
  jurisdiction_code: string;
  name: string;
  // tslint:disable-next-line:variable-name
  registered_address: string;
  // tslint:disable-next-line:variable-name
  retrieved_at: string;
  // tslint:disable-next-line:variable-name
  register_flag_AD: boolean;
  // tslint:disable-next-line:variable-name
  register_flag_CD: boolean;
  // tslint:disable-next-line:variable-name
  register_flag_DK: boolean;
  // tslint:disable-next-line:variable-name
  register_flag_HD: boolean;
  // tslint:disable-next-line:variable-name
  register_flag_UT: boolean;
  // tslint:disable-next-line:variable-name
  register_flag_VOE: boolean;
  // tslint:disable-next-line:variable-name
  native_company_number: string;
  registeredoffice: string;
  registrar: string;
  // tslint:disable-next-line:variable-name
  register_art: string;
  // tslint:disable-next-line:variable-name
  register_nummer: string;
  // tslint:disable-next-line:variable-name
  former_registrar: string;
  // tslint:disable-next-line:variable-name
  register_flag_Status_information: string;
  telephone: string;
  fax: string;
  url: string;
  // tslint:disable-next-line:variable-name
  sector_of_activity: string;
  officers: Array<Rabotnik>;
  sic: string;
  kapital: string;
  email: string;
  web2Url: string;
  googleUri: string;
  googleEmail: string;
  emails: Set<string>;
  keywordsIndustry: string;
  catalog: string;
  activity: string;
  title = 'Company Database';
}

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

