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
import { LoginComponent } from './main/contents/Login/login.component';
import { LoginModule } from './main/contents/Login/Login.module';
import { CVComponent } from './main/contents/CurriculumVitae/cv.component';
import { CVModule } from './main/contents/CurriculumVitae/cv.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonHomeComponent } from './main/contents/Person/homepage/person-home.component';
import { InterviewHomeComponent } from './main/contents/Interview/homepage/interview-home.component';
import { PersonModule } from './main/contents/Person/person.module';
import { InterviewModule } from './main/contents/Interview/interview.module';
import { QuestionComponent } from './main/contents/QA/question.component';
import { QuestionModule } from './main/contents/QA/question.module';

const appRoutes: Routes = [

  {   path: 'test',
      component: ViewComponent,
  },
  {   path: 'postjob',
      component: PostingJobComponent,
  },
  {   path: 'interview',
      component: InterviewHomeComponent,
  },
  {   path: 'person',
      component: PersonHomeComponent,
  },
  {   path: 'qa',
      component: QuestionComponent,
  },
  {   path: 'home',
      component: HomeComponent,
  },
  {   path: 'login',
      component: LoginComponent,
  },
  {   path: 'cv',
      component: CVComponent,
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
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    TestModule,
    PostJobModule,
    HomeModule,
    LoginModule,
    CVModule,
    PersonModule,
    InterviewModule,
    QuestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
