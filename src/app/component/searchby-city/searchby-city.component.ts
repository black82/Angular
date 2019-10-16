import {Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, Renderer, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {count, map, startWith} from 'rxjs/operators';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
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
      state('closed', style({transform: 'translateX(0)', height: '600px'})),
      transition('open => closed', [
        style({transform: 'translateX(-100%)', height: '600px'}),
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


  num = 0;
  isOpen = 'closed';
  hideme = [];
  filteredOptions: Observable<string[]>;

  @Input()
  company: Company;
  notFound: string;
  city: string;
  companies: Company [];
  formByCity: FormGroup;
  @Output()
  submitUser: EventEmitter<Company> = new EventEmitter();


  visibili = true;
  private counter = 0;
  private cityarr: string[];

  searchByCity($event) {
    this.client.getListCompany('/get1000/' + this.formByCity.controls.city.value).subscribe(
      company => {
        this.companies = company;
      }
    );

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

  onSubmit($event) {
    this.submitUser.emit(this.formByCity.value);
  }

  ngOnInit() {
    this.cityarr = this.citis.cityarr;
    this.createForm();

    this.filteredOptions = this.formByCity.controls.city.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cityarr.filter(option => option.toLowerCase().includes(filterValue));

  }

  checkedPresent(city: string) {
    return this.cityarr.includes(city);
  }

  toggle() {
    // @ts-ignore
    this.isOpen = !this.isOpen;
  }

  toggleClass(id: number) {
    let first;
    this.num++;
    if (this.num > 1) {
      this.hideme[first] = !this.hideme[first];
      first = id;
    } else {
      first = id;
    }

  }
}
