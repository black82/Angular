import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../DTO/CompanyDto';

@Component({
  selector: 'app-oncompany',
  templateUrl: './oncoming.component.html',
  styleUrls: ['./oncoming.component.css']
})
export class OncomingComponent implements OnInit {
  @Input()
  company: Company;
  emailArray: string[];

  constructor() {
  }

  ngOnInit() {

  }

}
