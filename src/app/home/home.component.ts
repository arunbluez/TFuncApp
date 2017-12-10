import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-tab1',
  template: `
  <div >
    <p>Add Features here!</p>
  `,
})
export class FeaturesComponent { }

@Component({
  selector: 'ngx-tab2',
  template: `
    <p>Contact tab works</p>
  `,
})
export class ContactComponent { }

@Component({
  selector: 'ngx-tab3',
  template: `
    <p>Update tab works</p>
  `,
})
export class UpdatesComponent { }


@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

  export class HomeComponent implements OnInit {

    public imageSources: string[] = [
     'assets/images/home/h1.jpg',
     'assets/images/home/h2.jpg',
     'assets/images/home/h3.jpg',
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 10000,
    stopAutoplayMinWidth: 768,
    hideNavElements: true,
  };

  ngOnInit() {
  }

  constructor(public router: Router) {
  }


}
