import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/common/Material.module';
// import { SwiperModule } from 'angular2-useful-swiper';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
    direction: 'horizontal',
    // threshold: 50,
    spaceBetween: 5,
    slidesPerView: 'auto',
    // centeredSlides: true,
    navigation: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   hide: false,
    //   draggable: true
    // }
};

const Routes: Routes = [
    {   path: '',
        component: HomeComponent
    },
  ];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
      RouterModule.forRoot(Routes),
      MaterialModule,
      SwiperModule,
    ],
    exports: [
    ],
    providers: [
      {
        provide:　SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      }
    ]
})
export class HomeModule {
}
