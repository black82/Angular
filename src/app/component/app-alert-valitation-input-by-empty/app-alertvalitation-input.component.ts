import {Component, Input, NgZone, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-app-alertvalitation-input',
  templateUrl: './app-alertvalitation-input.component.html',
  styleUrls: ['./app-alertvalitation-input.component.css'],
  animations: [
    trigger('toggleBox', [
      // ...
      state('open', style({transform: 'translateX(0)'})),
      state('closed', style({transform: 'translateX(0)', height: '100%'})),
      transition('open => closed', [
        style({transform: 'translateX(-100%)', display: 'flex', height: '100%'}),
        animate('0.5s 300ms ease-in')
      ]),

      transition('closed => open', [
        animate('0.3s ease-out', style({transform: 'translateX(0)'}))
      ]),
    ])
  ]
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
