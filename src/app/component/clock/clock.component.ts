import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  clock: string;
  date: Date;
  visibility = true;


  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  show() {
    this.visibility = !this.visibility;
  }

  ngOnInit() {
  }

}
