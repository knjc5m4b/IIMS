import { PostingJobComponent } from './view/job-posting-view.component';
import { MaterialModule } from 'src/app/common/Material.module';
import { PostingJobEditorComponent } from './homepage/editor/job-posting-editor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const Routes: Routes = [

    {   path: 'editor',
        component: PostingJobEditorComponent
    },
    {   path: '',
        component: PostingJobComponent
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
        PostingJobEditorComponent,
        PostingJobComponent
    ],
    entryComponents: [
        PostingJobEditorComponent,
        PostingJobComponent
    ],
    declarations: [
        PostingJobEditorComponent,
        PostingJobComponent
    ]
})
export class PostJobModule {
}
