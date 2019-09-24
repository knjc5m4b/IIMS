import { InterviewComponent } from './view/interview.component';
import { MaterialModule } from 'src/app/common/Material.module';
import { InterviewHomeComponent } from './homepage/interview-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const Routes: Routes = [

    {   path: 'view',
        component: InterviewComponent
    },
    {   path: '',
        component: InterviewHomeComponent
    },
];

@NgModule ({
    imports: [
        RouterModule.forRoot(Routes),
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        RouterModule,
        InterviewHomeComponent,
        InterviewComponent
    ],
    entryComponents: [
        InterviewHomeComponent,
        InterviewComponent
    ],
    declarations: [
        InterviewHomeComponent,
        InterviewComponent
    ]
})
export class InterviewModule {
}
