import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  notFound: string;
  formId: FormGroup;


  createForm() {
    this.formId = this.fb.group({
      id: [Validators.required]
    });
  }

  searcById() {
    this.client.GetCompanyOane(this.id).subscribe(response => {
      console.log(response);
      this.company = response;
    });
  }


  ngOnInit() {
  }

}
