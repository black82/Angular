import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [NgbCarouselConfig]
})
export class BodyComponent implements OnInit {
  images: string[];


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.images = ['assets/image/caruseli.jpg', 'assets/image/caruseli2.jpg',
      'assets/image/caruseli1.jpg', 'assets/image/caruseli3.jpg', 'assets/image/caruseli5.jpg',
      'assets/image/caruseli6.jpg', 'assets/image/caruseli7.jpg',
      'assets/image/caruseli8.jpg', 'assets/image/caruseli9.jpg', 'assets/image/caruseli10.jpg',
      'assets/image/caruseli11.jpg', 'assets/image/caruseli12.jpg'];
  }
}
