import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    @ViewChild(SwiperComponent) componentRef: SwiperComponent;
    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

    public slides = [
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/1912/production/_105981460_d9ff6226-aae3-4bba-8634-d26742299c80.jpg',
      'https://pics.ettoday.net/images/1294/d1294597.jpg',
      'http://p3.pstatp.com/large/102000012c2e9ed947aa',
      'https://i1.read01.com/SIG=22kd5l7/30466c744479714e6c39.jpg',
      'assets/image/cat1.jpg',
      'assets/image/cat.jpg',
    ];
}
