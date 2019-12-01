import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientServiceService} from '../../service/httpclient/clientService.service';
import {IndustryArayService} from '../../service/services/industryAray.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Company} from '../../DTO/CompanyDto';


@Component({
  selector: 'app-searchby-industry',
  templateUrl: './searchby-industry.component.html',
  styleUrls: ['./searchby-industry.component.css']
})
export class SearchbyIndustryComponent implements OnInit {
  visibili = false;
  formByIndustry: FormGroup;
  errorMessage: string;
  filteredOptions: Observable<string[]>;
  companies: Company [];
  isOpen = 'closed';
  hideme = [];

  constructor(private fb: FormBuilder,
              private industryContainer: IndustryArayService,
              private apiClient: ClientServiceService
  ) {
  }

  createForm() {
    this.formByIndustry = this.fb.group({
      branch: [{value: null},
        [
          Validators.required,
          Validators.nullValidator
        ]]
    });
  }


  ngOnInit() {
    this.createForm();
    this.formByIndustry.get('branch').setValue('');
    this.filterBranchInput();
  }

  searchByActivity($even) {
    if (this.formByIndustry.invalid) {
      // tslint:disable-next-line:max-line-length
      this.errorMessage = 'You have introduced a branch of the industry that is not accepted by our service. Please try again. The value entered is:'
        + this.formByIndustry.controls.branch.value;
      this.visibili = true;
    }
    if (!this.checkBranchIsPrezent()) {
      this.errorMessage = 'You have introduced a branch of industry that is not present in the database. Please try again.' +
        '\n Entered value is - ' + this.formByIndustry.controls.branch.value;
      this.visibili = true;
      this.formByIndustry.setErrors({incorrect: true});
    } else {
      this.apiClient.getListCompany('/industry/' + this.formByIndustry.controls.branch.value).subscribe(
        company => {
          this.companies = company;
        },
        error => {
          this.errorMessage = 'Something bad happened;   please try again later.';
          this.visibili = true;
          this.formByIndustry.setErrors({incorrect: true});
        }
      );
    }
  }

  filterBranchInput() {
    this.filteredOptions = this.formByIndustry.controls.branch.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.industryContainer.industry.filter(option => option.toLowerCase().includes(filterValue));
  }

  checkBranchIsPrezent(): boolean {
    return this.industryContainer.industry.includes(this.formByIndustry.get('branch').value);
  }


  toggle() {
    // @ts-ignore
    this.isOpen = !this.isOpen;
  }
}

