import {Component, OnInit, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Company} from '../../DTO/CompanyDto';
import {ClientServiceService} from '../../service/httpclient/clientService.service';


@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {
  id: number;
  company: Company;
  formId: FormGroup;
  alertShouw = false;
  errorMessage: string;
  byid = 'byid';
  @Output()
  errorResponse: HttpErrorResponse;

  constructor(private http: HttpClient, private fb: FormBuilder, private client: ClientServiceService) {
  }

  createForm() {
    this.formId = this.fb.group({
      idControl: [{value: null},
        [
          Validators.required,
          Validators.nullValidator,
          Validators.pattern('^[0-9]*$')
        ]
      ]
    });
  }

  searcById($event) {
    if (this.formId.invalid) {
      // tslint:disable-next-line:max-line-length
      this.errorMessage = 'You entered an incorrect value. Enter a number from 1 to 5,000,000. Depending on the company ID. The wrong value. !!!'
        + this.formId.controls.idControl.value;
      this.alertShouw = true;

    } else if (!this.formId.invalid) {
      this.client.GetCompanyOane(this.formId.controls.idControl.value)
        .subscribe(response => {
            this.company = response;
          },
          error => {
            this.errorResponse = (error as HttpErrorResponse);
            this.errorMessage = 'Something bad happened. Please try again later.';
            this.formId.get('idControl').setErrors({incorrect: true});
            this.alertShouw = true;
          }
        );
    }
  }

  ngOnInit() {
    this.createForm();
    this.formId.get('idControl').setValue('');

  }
}
