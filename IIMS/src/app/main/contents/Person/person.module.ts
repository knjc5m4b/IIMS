import { MaterialModule } from 'src/app/common/Material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonHomeComponent } from './homepage/person-home.component';
import { PersonViewComponent } from './view/person-view.component';


const Routes: Routes = [

    {   path: 'view',
        component: PersonViewComponent
    },
    {   path: '',
        component: PersonHomeComponent
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
        PersonViewComponent,
        PersonHomeComponent
    ],
    entryComponents: [
        PersonViewComponent,
        PersonHomeComponent
    ],
    declarations: [
        PersonViewComponent,
        PersonHomeComponent
    ]
})
export class PersonModule {
}
