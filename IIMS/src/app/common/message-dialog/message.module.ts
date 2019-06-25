import { NgModule } from '@angular/core';
import { MaterialModule } from '../Material.module';
import { MessageDialogComponent } from './message-dialog.component';

@NgModule ({
    declarations: [
        MessageDialogComponent
    ],
    imports: [
        MaterialModule,
    ],
    exports: [
        MessageDialogComponent
    ],
    entryComponents: [
        MessageDialogComponent
    ]
})
export class MessageModule {
}
