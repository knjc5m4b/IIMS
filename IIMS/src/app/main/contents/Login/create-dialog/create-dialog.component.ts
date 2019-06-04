import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MessageDialogComponent } from 'src/app/common/message-dialog/message-dialog.component';

@Component({
    selector: 'app-create-dialog',
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent {
    @Input() addaccount: string;
    @Input() addpassword: string;
    @Input() repassword: string;
    @Input() staffnum: string;


    getmode = '';
    accountdata = [];

    constructor(
        private dialog: MatDialog,
        private dialogRef: MatDialogRef<CreateDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        private data: any,
    ) {
    }

    cancel() {
        this.dialogRef.close();
    }

    confirm() {
        if (this.getmode === 'interviewer') {
            if (this.staffnum === undefined || this.staffnum === '' || this.staffnum === null) {
                alert('staffnum is null!');
            } else if (this.addaccount === undefined || this.addaccount === '' || this.addaccount === null) {
                alert('addaccount is null!');
            } else if (this.addpassword === undefined || this.addpassword === '' || this.addpassword === null) {
                alert('addpassword is null!');
            } else if (this.repassword === undefined || this.repassword === '' || this.repassword === null) {
                alert('repassword is null!');
            } else {
                this.accountdata = [this.addaccount, this.addpassword, this.repassword, this.staffnum];
                this.dialogRef.close(this.accountdata);
                this.opendialog();
            }
        } else if (this.getmode === 'interviewee') {
            if (this.addaccount === undefined || this.addaccount === '' || this.addaccount === null) {
                alert('addaccont is null!');
            } else if (this.addpassword === undefined || this.addpassword === '' || this.addpassword === null) {
                alert('addpassword is null!');
            } else if (this.repassword === undefined || this.repassword === '' || this.repassword === null) {
                alert('repassword is null!');
            } else {
                this.accountdata = [this.addaccount, this.addpassword, this.repassword];
                this.dialogRef.close(this.accountdata);
                this.opendialog();
            }
        }
    }

    opendialog() {
        const dialogRef = this.dialog.open(MessageDialogComponent, {
            width: '600px',
            // height: '700px',
            data: {
                title: 'Confirm',
                content: '註冊成功!'
            }
        });
        dialogRef.afterClosed().subscribe(res => {
        });
    }


    modeer() {
        this.getmode = 'interviewer';
    }
    modeee() {
        this.getmode = 'interviewee';
    }

}
