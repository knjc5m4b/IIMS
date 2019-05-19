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
      'First slide',
      'Second slide',
      'Third slide',
      'Fourth slide',
      'Fifth slide',
      'Sixth slide'
    ];
}
