import { TestComponent } from '../test/test.component';

import { YorikoTestComponent } from '../yoriko/yorikotest.component';

import { SindyTestComponent } from '../sindy/sindytest.component';

import { ZackTestComponent } from '../zack/zacktest.component';

import { ViewComponent } from './view.component';

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/common/Material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TabDialogComponent } from '../test/tab-dialog/tab-dialog.component';



const Routes: Routes = [

    {   path: 'angela',
        component: TestComponent
    },
    {   path: 'yoriko',
        component: YorikoTestComponent
    },
    {   path: 'sindy',
        component: SindyTestComponent
    },
    {   path: 'zack',
        component: ZackTestComponent
    },
    {   path: '',
        component: ViewComponent
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
        TestComponent,
        YorikoTestComponent,
        ZackTestComponent,
        SindyTestComponent,
        RouterModule,
        ViewComponent,
    ],
    entryComponents: [
        TestComponent,
        YorikoTestComponent,
        ZackTestComponent,
        SindyTestComponent,
        ViewComponent,
        // TabDialogComponent
    ],
    declarations: [
        TestComponent,
        YorikoTestComponent,
        ZackTestComponent,
        SindyTestComponent,
        ViewComponent
    ]
})
export class ViewModule {
}
