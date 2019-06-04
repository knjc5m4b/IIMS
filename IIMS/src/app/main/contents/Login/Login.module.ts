import { LoginComponent } from './login.component';

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/Material.module';
// import { SwiperModule } from 'angular2-useful-swiper';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { FileDropModule } from 'ngx-file-drop';
import { ngfModule } from 'angular-file';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 50,
    slidesPerView: 'auto',
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
        component: LoginComponent
    },
  ];

@NgModule({
    declarations: [
      LoginComponent,
      CreateDialogComponent
    ],
    imports: [
      RouterModule.forRoot(Routes),
      MaterialModule,
      SwiperModule,
      ReactiveFormsModule,
      FormsModule,
      FileDropModule,
      ngfModule
    ],
    exports: [
      LoginComponent,
    ],
    entryComponents: [
      LoginComponent,
      CreateDialogComponent
    ],
    providers: [
      {
        provide:　SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      }
    ]
})
export class LoginModule {
}
