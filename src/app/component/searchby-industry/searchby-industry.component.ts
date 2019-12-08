import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientServiceService} from '../../service/httpclient/clientService.service';
import {IndustryArayService} from '../../service/services/industryAray.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Company} from '../../DTO/CompanyDto';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-searchby-industry',
  templateUrl: './searchby-industry.component.html',
  styleUrls: ['./searchby-industry.component.css']
})
export class SearchbyIndustryComponent implements OnInit {
  alertShouw = false;
  formByIndustry: FormGroup;
  errorMessage: string;
  filteredOptions: Observable<string[]>;
  companies: Company [];
  isOpen = 'closed';
  hideme = [];
  byindustry = 'byindustry';
  @Output()
  errorResponse: HttpErrorResponse;
  branch: any;
  hidemeWaitCursor = false;

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
  }

  searchByActivity() {
    this.hidemeWaitCursor = true;
    if (this.formByIndustry.invalid) {
      // tslint:disable-next-line:max-line-length
      this.errorMessage = 'You have introduced a branch of the industry that is not accepted by our service. Please try again.!!!'
        + this.formByIndustry.controls.branch.value;
      this.alertShouw = true;
    }
    if (!this.checkBranchIsPrezent()) {
      // tslint:disable-next-line:max-line-length
      this.errorMessage = `You have introduced a branch of industry that is not present in the database. Please try again.!!! ${this.formByIndustry.controls.branch.value}`;
      this.alertShouw = true;
      this.formByIndustry.setErrors({incorrect: true});
    } else {
      this.apiClient.getListCompany('/industry/' + this.formByIndustry.controls.branch.value).subscribe(
        company => {
          this.hidemeWaitCursor = false;
          this.companies = company;
        },
        error => {
          this.hidemeWaitCursor = false;
          this.errorResponse = (error as HttpErrorResponse);
          this.errorMessage = 'Something bad happened. Please try again later.';
          this.alertShouw = true;
          this.formByIndustry.setErrors({incorrect: true});
        }
      );
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.industryContainer.industry.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));


  checkBranchIsPrezent(): boolean {
    return this.industryContainer.industry.includes(this.formByIndustry.get('branch').value);
  }


  toggle() {
    // @ts-ignore
    this.isOpen = !this.isOpen;
  }
}

