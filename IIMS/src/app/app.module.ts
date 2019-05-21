import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/Material.module';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './main/contents/test/view/view.component';
import { PostJobModule } from './main/contents/Postting-Job/posting-job.module';
import { TestModule } from './main/contents/test/test.module';
import { PostingJobComponent } from './main/contents/Postting-Job/view/job-posting-view.component';
import { HomeComponent } from './main/contents/Home/home.component';
import { HomeModule } from './main/contents/Home/home.module';

const appRoutes: Routes = [

  {   path: 'test',
      component: ViewComponent,
  },
  {   path: 'postjob',
      component: PostingJobComponent,
  },
  {   path: 'home',
      component: HomeComponent,
  },
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
    MaterialModule,
    HomeModule
  ],
  exports: [
    RouterModule,
    TestModule,
    PostJobModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
