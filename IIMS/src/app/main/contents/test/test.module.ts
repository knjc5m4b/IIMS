import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { MaterialModule } from 'src/app/common/Material.module';

@NgModule ({
    imports: [
        MaterialModule
    ],
    exports: [
        TestComponent
    ],
    entryComponents: [
        TestComponent
    ],
    declarations: [
        TestComponent
    ]
})
export class TestModule {
}
