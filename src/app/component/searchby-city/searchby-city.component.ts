import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientServiceService} from '../../service/clientService.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CityArray} from '../../DTO/CityArray';
import {Import} from '@angular/core/schematics/utils/typescript/imports';


@Component({
  selector: 'app-searchby-city',
  templateUrl: './searchby-city.component.html',
  styleUrls: ['./searchby-city.component.css']
})

export class SearchbyCityComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {

  }

  @Input()
  citiArr: CityArray;
  isPresent = false;
  myControl = new FormControl();
  options: string[] = ['Berlin', 'Hanover', 'Frankfurt'];
  filteredOptions: Observable<string[]>;
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

  cityarr: string[] = [
    'Aachen',
    'Aalen',
    'Aarbergen',
    'Abenberg',
    'Abensberg',
    'Abtsgmünd',
    'Achern',
    'Achim',
    'Adelebsen',
    'Adelsdorf',
    'Adenau',
    'Adendorf',
    'Adlkofen',
    'Adorf',
    'Aerzen',
    'Ahaus',
    'Ahnsen',
    'Ahrbrück',
    'Ahrensburg',
    'Ahrensfelde',
    'Aichach',
    'Aichtal',
    'Aidlingen',
    'Ainring',
    'Aiterhofen',
    'Albbruck',
    'Albershausen',
    'Albig',
    'Albstadt',
    'Aldenhoven',
    'Aldingen',
    'Alfdorf',
    'Alfeld (Leine)',
    'AlfterAllendorf',
    'Allensbach',
    'Allersberg',
    'Alling',
    'Allmersbach im Tal',
    'Almdorf',
    'Alpen',
    'Alpirsbach',
    'Alsbach-Hähnlein',
    'Alsdorf',
    'Alsenz',
    'Alsfeld',
    'Altbach',
    'Altdorf',
    'Altena',
    'Altenahr',
    'Altenberg',
    'Altenberge',
    'Altenbuch',
    'Altenburg',
    'Altendiez',
    'Altenkirchen (Westerwald)',
    'Altenkunstadt',
    'Altenstadt',
    'Altenstadt an der Waldnaab',
    'Altensteig',
    'Althegnenberg',
    'Althengstett',
    'Althütte',
    'Altlußheim',
    'Altmannstein',
    'Altötting',
    'Altrip',
    'Alzenau',
    'Alzey',
    'Amberg',
    'Amerang',
    'Ammerbuch',
    'Amöneburg',
    'Amorbach',
    'Ampfing',
    'Andechs',
    'Andernach',
    'Angelbachtal',
    'Ankum',
    'Annaberg-Buchholz',
    'Annweiler am Trifels',
    'Ansbach',
    'Apen',
    'Apensen',
    'Apolda',
    'Appenweier',
    'Arnsberg',
    'Arnstadt',
    'Arnstorf',
    'Artern/Unstrut',
    'Arzfeld',
    'Asbach',
    'Aschaffenburg',
    'Ascheberg',
    'Aschersleben',
    'Aschheim',
    'Aßlar',
    'Aspach',
    'Asperg',
    'Attendorn',
    'Au',
    'Aue',
    'Auerbach',
    'Auetal',
    'Augsburg',
    'Auhausen',
    'Aulendorf',
    'Aumühle',
    'Aurich',
    'Aystetten'];

  searchByCity($event) {
    if (this.formByCity.valid) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        responseType: 'json'
      });
      this.service.searchByCity('http://127.0.0.1:8081/get1000/'+this.formByCity.controls.city.value);

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

  checkisPresent(city: string) {
    if (this.cityarr.includes(city)) {
     return  true;
    }
  }
}
