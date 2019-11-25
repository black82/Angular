import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message: string;
  url: string;
  isColapset: boolean;

  constructor() {
    this.url = 'dother compani home url';
    this.isColapset = true;
    this.message = 'Company DataBasse';
  }

  ngOnInit() {
  }

  teox(event) {
    this.isColapset = !this.isColapset;
  }

}
