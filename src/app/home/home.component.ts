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
     'http://www.industrytap.com/wp-content/uploads/2016/08/IoT-Platforms-e1471532141262.jpg',
     'http://2.bp.blogspot.com/-t3abcpVn0l4/VOxKa22zehI/AAAAAAAAAKk/u9URi8CM6XU/s1600/Internetthings-COverImage.png',
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
