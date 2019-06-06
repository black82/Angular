import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-searchby-city',
  templateUrl: './searchby-city.component.html',
  styleUrls: ['./searchby-city.component.css']
})

export class SearchbyCityComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }


  @Input()
  company: Company;
  notFound: string;
  city: string;
  companies: Company [];
  formByCity: FormGroup;

  searchByCity($event) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'json'
    });
    this.http.get<Company[]>('http://127.0.0.1:8081/get1000/' + this.formByCity.controls.city.value, {headers})
      .subscribe((response => {
        this.companies = response;
      }));
  }

  createForm() {
    this.formByCity = this.fb.group({
      city: [
        {value: null}, [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$')
        ]
      ]
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
