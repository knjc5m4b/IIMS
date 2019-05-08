import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/common/Material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewModule } from './view/view.module';
import { ViewComponent } from './view/view.component';

const Routes: Routes = [
    {   path: 'view',
        // loadChildren: './view/view.module#ViewModule'
        component: ViewComponent
    },
    {   path: '',
        redirectTo: '/test',
        pathMatch: 'full'
    },
  ];
@NgModule ({
    imports: [
        RouterModule.forRoot(Routes),
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ViewModule
    ],
    exports: [
        RouterModule,
    ]
})
export class TestModule {
}
