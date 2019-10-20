import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {CitiarrayService} from '../../service/services/citiarray.service';
import {ClientServiceService} from '../../service/httpclient/clientService.service';


@Component({
  selector: 'app-searchby-city',
  templateUrl: './searchby-city.component.html',
  styleUrls: ['./searchby-city.component.css'],
  animations: [
    trigger('toggleBox', [
      // ...
      state('open', style({transform: 'translateX(0)'})),
      state('closed', style({transform: 'translateX(0)', height: '100%'})),
      transition('open => closed', [
        style({transform: 'translateX(-100%)', display: 'flex', height: '100%'}),
        animate('0.5s 300ms ease-in')
      ]),

      transition('closed => open', [
        animate('0.3s ease-out', style({transform: 'translateX(0)'}))
      ]),
    ])
  ]

})

export class SearchbyCityComponent implements OnInit {


  constructor(private http: HttpClient, private fb: FormBuilder,
              private citis: CitiarrayService,
              private client: ClientServiceService) {
  }

  errorMenage: string;
  isOpen = 'closed';
  hideme = [];
  filteredOptions: Observable<string[]>;
  @Input()
  company: Company;
  city: string;
  companies: Company [];
  formByCity: FormGroup;
  @Output()
  submitUser: EventEmitter<Company> = new EventEmitter();
  visibili = false;
  private cityarr: string[];

  searchByCity($event) {
    if (this.formByCity.invalid) {
      this.errorMenage = 'You entered an incorrect value in the search field. Try again !!! ' + this.formByCity.controls.city.value;

      this.visibili = true;
    }
    if (!this.cheekCity()) {
      this.formByCity.get('city').setErrors({incorrect: true});
      this.errorMenage = 'The value you entered is not present in the list of cities!!! ' + this.formByCity.controls.city.value;
      this.visibili = true;
    } else {
      this.client.getListCompany('/get1000/' + this.formByCity.controls.city.value).subscribe(
        company => {
          this.companies = company;
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
    this.filteredOptions = this.formByCity.controls.city.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  cheekCity() {
    return this.cityarr.includes(this.formByCity.get('city').value);
  }

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cityarr.filter(option => option.toLowerCase().includes(filterValue));
  }

  toggle() {
    // @ts-ignore
    this.isOpen = !this.isOpen;
  }
}
