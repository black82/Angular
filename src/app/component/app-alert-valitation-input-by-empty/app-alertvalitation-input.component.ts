import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-app-alertvalitation-input',
  templateUrl: './app-alertvalitation-input.component.html',
  styleUrls: ['./app-alertvalitation-input.component.css']
})

export class AppAlertvalitationInputComponent implements OnInit {
  @Input()
  control: FormGroup;
  @Input()
  errorMessage: string;
  hiddenAlertB = true;
  @Input()
  position: string;
  @Input()
  error: HttpErrorResponse;
  valueChange: string;
  message: string [];
  typeAlert: boolean;

  constructor() {
  }


  ngOnInit() {
    if (this.errorMessage.includes('!!!')) {
      this.typeAlert = true;
      this.valuechange();
    } else {
      this.typeAlert = false;
    }
  }


  valuechange() {
    this.message = this.errorMessage.split('!!!');
    this.errorMessage = this.message[0];
    this.valueChange = this.message[1];
  }
}
