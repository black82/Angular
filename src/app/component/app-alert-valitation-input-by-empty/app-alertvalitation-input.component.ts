import {Component, Input, NgZone, OnInit} from '@angular/core';
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
  shoerore = false;

  constructor(zone: NgZone) {

    zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.shoerore = true;
      }, 10);
    });
  }


  ngOnInit() {

  }

}
