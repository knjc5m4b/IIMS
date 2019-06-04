import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TabDialogComponent } from 'src/app/main/contents/Home/tab-dialog/tab-dialog.component';

@Component({
    selector: 'app-msg',
    templateUrl: './message-dialog.component.html',
    styleUrls: ['./message-dialog.component.css']
})

export class MessageDialogComponent {
    constructor(
        private dialogRef: MatDialogRef<MessageDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        private data: any,
    ) {}
    confirm() {
        this.dialogRef.close();
    }
}
