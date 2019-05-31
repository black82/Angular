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
    this.url = 'https://teox.eu/';
    this.isColapset = true;
    setTimeout(() => {
      this.message = 'Teox DataBase';
    }, 3000);
  }

  ngOnInit() {
  }

  teox(event) {
    this.isColapset = !this.isColapset;

  }

}
