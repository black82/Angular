import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

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

  constructor() {
  }


  ngOnInit() {

  }

  hiddenAlert() {
    this.hiddenAlertB = !this.hiddenAlertB;
  }
}
