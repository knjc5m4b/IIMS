import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-tab-dialog',
    templateUrl: './tab-dialog.component.html',
    styleUrls: ['./tab-dialog.component.css']
})
export class TabDialogComponent {
    // @Input() tabname: string;
    // @Input() tabcontent: string;
    tabimage: null;

    constructor(
        public dialogRef: MatDialogRef<TabDialogComponent>,
        public data: any
    ) {
    }
}
