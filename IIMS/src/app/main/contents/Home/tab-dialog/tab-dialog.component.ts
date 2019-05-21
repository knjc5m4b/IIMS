import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-tab-dialog',
    templateUrl: './tab-dialog.component.html',
    styleUrls: ['./tab-dialog.component.css']
})
export class TabDialogComponent {
    @Input() tabname: string;
    @Input() tabcontent: string;

    tabimage: any;
    tabdata = [];

    constructor(
        private dialogRef: MatDialogRef<TabDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        private data: any,
    ) {
    }

    cancel() {
        this.dialogRef.close();
    }

    confirm() {
        if (this.tabname === undefined || this.tabname === '' || this.tabname === null) {
            alert('name is null!');
        } else if (this.tabcontent === undefined || this.tabcontent === '' || this.tabcontent === null) {
            alert('content is null!');
        } else {
            this.data.tabs.push(this.tabname);
            this.data.selected.setValue(this.data.tabs.length);
            this.tabdata = [this.tabcontent, this.tabimage];
            this.dialogRef.close(this.tabdata);
        }

    }

    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = () => {
                this.tabimage = reader.result;
            };
        }
    }
}
