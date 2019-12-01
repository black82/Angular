import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../DTO/CompanyDto';
import {FormGroup} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-listtables',
  templateUrl: './lis-tables.component.html',
  styleUrls: ['./lis-tables.component.css'],
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
export class LisTablesComponent implements OnInit {
  @Input()
  control: FormGroup;
  @Input()
  companies: Company[];
  isOpen = 'closed';
  hideme = [];

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    // @ts-ignore
    this.isOpen = !this.isOpen;
  }

}
