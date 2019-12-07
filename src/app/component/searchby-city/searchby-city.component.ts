import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from '../../DTO/CompanyDto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {CitiarrayService} from '../../service/services/citiarray.service';
import {ClientServiceService} from '../../service/httpclient/clientService.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-searchby-city',
  templateUrl: './searchby-city.component.html',
  styleUrls: ['./searchby-city.component.css']
})

export class SearchbyCityComponent implements OnInit {

  bycity = 'bycity';
  alertShouw: string;
  isOpen = 'closed';
  hideme = [];
  @Input()
  company: Company;
  city: string;
  companies: Company [];
  formByCity: FormGroup;
  @Output()
  submitUser: EventEmitter<Company> = new EventEmitter();
  @Output()
  errorResponse: HttpErrorResponse;
  visibili = false;
  cityarr: string[];

  constructor(private fb: FormBuilder,
              private citis: CitiarrayService,
              private client: ClientServiceService) {
  }

  searchByCity() {
    if (this.formByCity.invalid) {
      this.alertShouw = 'You entered an incorrect value in the search field. Try again. !!! ' + this.formByCity.controls.city.value;
      this.visibili = true;
    }
    if (!this.cheekCity()) {
      this.formByCity.get('city').setErrors({incorrect: true});
      this.alertShouw = 'The value you entered is not present in the list of cities.!!! ' + this.formByCity.controls.city.value;
      this.visibili = true;
    } else {
      this.client.getListCompany('/get1000/' + this.formByCity.controls.city.value)
        .subscribe(company => {
            this.companies = company;
          },
          error => {
            this.errorResponse = (error as HttpErrorResponse);
            this.alertShouw = 'Something bad happened  please try again later.';
            this.formByCity.get('city').setErrors({incorrect: true});
            this.visibili = true;
          }
        );
    }
  }

  createForm() {
    this.formByCity = this.fb.group({
      city: [
        {value: null}, [
          Validators.required,
          Validators.pattern('^[\$_a-zA-Z]+[\$_\w \\w]*$')
        ]
      ]
    });
  }

  ngOnInit() {
    this.cityarr = this.citis.cityarr;
    this.createForm();
    this.formByCity.get('city').setValue('');
  }

  cheekCity() {
    return this.cityarr.includes(this.formByCity.get('city').value);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.cityarr.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));

  toggle() {
    // @ts-ignore
    this.isOpen = !this.isOpen;
  }


}
