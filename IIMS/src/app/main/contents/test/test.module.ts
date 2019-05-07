import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { MaterialModule } from 'src/app/common/Material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { YorikoTestComponent } from './yoriko/yorikotest.component';
import { ZackTestComponent } from './zack/zacktest.component';
import { SindyTestComponent } from './sindy/sindytest.component';

@NgModule ({
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        TestComponent,
        YorikoTestComponent,
        ZackTestComponent,
        SindyTestComponent
    ],
    entryComponents: [
        TestComponent,
        YorikoTestComponent,
        ZackTestComponent,
        SindyTestComponent
    ],
    declarations: [
        TestComponent,
        YorikoTestComponent,
        ZackTestComponent,
        SindyTestComponent
    ]
})
export class TestModule {
}
