import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {IndustryArayService} from '../../service/services/industryAray.service';
import {CitiarrayService} from '../../service/services/citiarray.service';
import {ClientServiceService} from '../../service/httpclient/clientService.service';

@Component({
  selector: 'app-bycityandbranch',
  templateUrl: './bycityandbranch.component.html',
  styleUrls: ['./bycityandbranch.component.css']
})
export class BycityandbranchComponent implements OnInit {
  alertShouw = false;
  formByCityAndBranch: FormGroup;
  errorResponse: HttpErrorResponse;
  byindustry = 'cityandbranch';
  errorMessage: string;
  companies: Company[];
  hidemeWaitCursor = false;
  branch: string;
  city: string;

  constructor(private fb: FormBuilder,
              private industryContainer: IndustryArayService,
              private apiClient: ClientServiceService,
              private  cityArr: CitiarrayService) {
  }

  ngOnInit() {
    this.createForm();
  }

  searchByActivityAndCity() {
    this.hidemeWaitCursor = true;
    const param = new HttpParams({
      fromObject: {
        address: this.city,
        activity: this.branch
      }
    });
    if (!this.checkBranchIsPrezentBranch()) {
      this.hidemeWaitCursor = false;
      this.errorMessage = 'Your value Branch Input is note invalidate';
      this.alertShouw = true;
    }
    if (!this.checkBranchIsPrezentCity()) {
      this.hidemeWaitCursor = false;
      this.errorMessage = 'Your value City is note invalidate';
      this.alertShouw = true;
    } else {
      this.apiClient.getListCompanyParam(param).subscribe(company => {
          this.hidemeWaitCursor = false;
          this.companies = company;
          console.log(this.companies);
        },
        error => {
          this.hidemeWaitCursor = false;
          this.errorResponse = (error as HttpErrorResponse);
          this.errorMessage = 'Something bad happened. Please try again later.';
          this.alertShouw = true;
          this.formByCityAndBranch.setErrors({incorrect: true});
        }
      );
    }
  }

  createForm() {
    this.formByCityAndBranch = this.fb.group({
      branch: [{value: null},
        [
          Validators.required,
          Validators.nullValidator
        ]],
      city: [{value: null},
        [
          Validators.required,
          Validators.nullValidator
        ]]
    });
  }

  searchbranch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.industryContainer.industry.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));

  searccity = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.cityArr.cityarr.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));

  checkBranchIsPrezentBranch(): boolean {
    return this.industryContainer.industry.includes(this.formByCityAndBranch.get('branch').value);
  }

  checkBranchIsPrezentCity(): boolean {
    return this.cityArr.cityarr.includes(this.formByCityAndBranch.get('city').value);
  }
}
