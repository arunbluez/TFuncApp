import { Component } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

  export class HomeComponent {

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


  }
