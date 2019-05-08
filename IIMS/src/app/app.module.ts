import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestModule } from './main/contents/test/test.module';
import { MaterialModule } from './common/Material.module';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

  {   path: '',
      component: AppComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    TestModule,
    MaterialModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
