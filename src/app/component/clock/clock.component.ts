import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  clock: string;
  date: string;
  visibility = true;


  constructor() {
    setInterval(() => {
      this.clock = new Date().toLocaleTimeString().normalize();
      this.date = new Date().toDateString().normalize();
    }, 1000);
  }

  show() {
    this.visibility = !this.visibility;
  }

  ngOnInit() {
  }

}
