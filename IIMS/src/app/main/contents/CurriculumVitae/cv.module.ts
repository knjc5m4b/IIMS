import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/common/Material.module';

import { Routes, RouterModule } from '@angular/router';
import { CVComponent } from './cv.component';
import { CVEditorComponent } from './editor/cv-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MAT_DATE_FORMATS } from '@angular/material';
import { AddressService } from 'src/app/common/address.service';
import { FileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { ngfModule } from 'angular-file';

const Routes: Routes = [

    {   path: 'cveditor',
        component: CVEditorComponent
    },
    {   path: '',
        component: CVComponent
    },
];

export const MY_FORMATS = {
    parse: {
      dateInput: 'LL',
    },
    display: {
      dateInput: 'YYYY/MM/DD',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        RouterModule.forRoot(Routes),
        MatMomentDateModule,
        FormsModule,
        CommonModule,
        FileDropModule,
        HttpClientModule,
        ngfModule
    ],
    exports: [
        RouterModule,
        CVComponent,
        CVEditorComponent,
    ],
    declarations: [
        CVComponent,
        CVEditorComponent,
    ],
    entryComponents: [
        CVComponent,
        CVEditorComponent,
    ],
    providers: [
        AddressService,
        {
            provide: MAT_DATE_FORMATS,
            useValue: MY_FORMATS
        },
    ]
})
export class CVModule {
}
