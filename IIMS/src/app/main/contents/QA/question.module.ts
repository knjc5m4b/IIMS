
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/Material.module';
import { FileDropModule } from 'ngx-file-drop';
import { ngfModule } from 'angular-file';
import { MessageModule } from 'src/app/common/message-dialog/message.module';
import { QuestionComponent } from './question.component';

const Routes: Routes = [
    {   path: '',
        component: QuestionComponent
    },
  ];

@NgModule({
    declarations: [
      QuestionComponent
    ],
    imports: [
      RouterModule.forRoot(Routes),
      MaterialModule,
      ReactiveFormsModule,
      FormsModule,
      FileDropModule,
      ngfModule,
      MessageModule
    ],
    exports: [
      QuestionComponent,
    ],
    entryComponents: [
      QuestionComponent,
    ],
    providers: [
    ]
})
export class QuestionModule {
}
