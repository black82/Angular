import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Company} from '../../DTO/CompanyDto';
import {ClientServiceService} from '../../service/httpclient/clientService.service';


@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {
  constructor(private http: HttpClient, private fb: FormBuilder, private client: ClientServiceService) {
  }


  id: number;
  company: Company;
  notFound: ValidationErrors;
  formId: FormGroup;
  alertShouw = false;


  createForm() {
    this.formId = this.fb.group({
      idControl: [{value: null},
        [
          Validators.required,
          Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        ]
      ]
    });
  }

  searcById() {
    if (this.formId.invalid) {
      this.alertShouw = true;
      this.notFound = this.formId.controls.idControl.errors;
      return;
    } else {
      this.id = this.formId.controls.idControl.value;
      this.client.GetCompanyOane(this.id).subscribe(response => {
          console.log(response);
          this.company = response;
        }
      );
    }
  }


  ngOnInit() {
    this.createForm();
    this.formId.get('idControl').setValue('');

  }
}
