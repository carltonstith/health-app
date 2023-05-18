import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  swiperSlideChanged(event:any) {
    console.log('changed: ', event);
  }

}
