import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Company} from '../../DTO/CompanyDto';


@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  id: number;
  company: Company;
  notFound: string;
  formId: FormGroup;


  createForm() {
    this.formId = this.fb.group({
      id: [Validators.required]
    });
  }

  searcById() {
    this.createForm();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'json'
    });

    this.http.get<Company>('http://127.0.0.1:8081/get/' + this.id, {headers})
      .subscribe((response => {
        this.company = response;
      }));
  }


  ngOnInit() {
  }

}
