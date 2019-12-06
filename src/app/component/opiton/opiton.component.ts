import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-opiton',
  templateUrl: './opiton.component.html',
  styleUrls: ['./opiton.component.css']
})
export class OpitonComponent implements OnInit {
  public model: any;
  @Input()
  options: string[];
  @Input()
  formname: string;

  constructor() {
  }

  ngOnInit() {
  }


}
