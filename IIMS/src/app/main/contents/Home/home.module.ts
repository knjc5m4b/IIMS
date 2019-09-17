import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/Material.module';
// import { SwiperModule } from 'angular2-useful-swiper';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TabDialogComponent } from './tab-dialog/tab-dialog.component';
import { FileDropModule } from 'ngx-file-drop';
import { ngfModule } from 'angular-file';
import { MessageModule } from 'src/app/common/message-dialog/message.module';
import { MessageDialogComponent } from 'src/app/common/message-dialog/message-dialog.component';
import { LoginService } from 'src/app/common/login.service';
import { SlideDialogComponent } from './slide-dialog/slide-dialog.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    // observer: true,
    direction: 'horizontal',
    // threshold: 50,
    spaceBetween: 30,
    slidesPerView: 2,
    centeredSlides: true,
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
        HomeComponent,
        TabDialogComponent,
        SlideDialogComponent
    ],
    imports: [
      RouterModule.forRoot(Routes),
      MaterialModule,
      SwiperModule,
      ReactiveFormsModule,
      FormsModule,
      FileDropModule,
      ngfModule,
      MessageModule
    ],
    exports: [
      HomeComponent,
    ],
    entryComponents: [
      HomeComponent,
      TabDialogComponent,
      SlideDialogComponent,
      MessageDialogComponent
    ],
    providers: [
      LoginService,
      {
        provide:　SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      }
    ]
})
export class HomeModule {
}
