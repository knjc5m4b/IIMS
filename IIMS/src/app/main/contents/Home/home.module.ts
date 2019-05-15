import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/common/Material.module';

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
    ],
    exports: [
    ],
})
export class HomeModule {
}
