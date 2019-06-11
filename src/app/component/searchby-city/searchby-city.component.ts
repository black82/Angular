import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientServiceService} from '../../service/clientService.service';


@Component({
  selector: 'app-searchby-city',
  templateUrl: './searchby-city.component.html',
  styleUrls: ['./searchby-city.component.css']
})

export class SearchbyCityComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  @Input()
  service: ClientServiceService;
  @Input()
  company: Company;
  notFound: string;
  city: string;
  companies: Company [];
  formByCity: FormGroup;
  @Output()
  submitUser: EventEmitter<Company> = new EventEmitter();

  searchByCity($event) {
    if (this.formByCity.valid) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        responseType: 'json'
      });
      this.service.searchByCity('http://127.0.0.1:8081/get1000/' + this.formByCity.controls.city.value);

    }
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
  onSubmit($event) {
    this.submitUser.emit(this.formByCity.value);
  }
  ngOnInit() {
    this.createForm();
  }

}
