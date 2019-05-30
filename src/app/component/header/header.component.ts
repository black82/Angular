import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message = 'Teox DataBase';
  url: string;
  isColapset: boolean;

  constructor() {
    this.url = 'https://teox.eu/';
    this.isColapset = true;
  }

  ngOnInit() {
  }

  teox(event) {
    this.isColapset = !this.isColapset;

  }

}
