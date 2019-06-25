import { Component, Input} from '@angular/core';
import { MatDialog} from '@angular/material';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    @Input() account: string;
    @Input() password: string;

    addaccount = '';
    addpassword = '';
    repassword = '';
    staffnum = '';

  constructor( private dialog: MatDialog) {}

    login() {
        if (this.account === undefined) {
            alert('未輸入帳號!');
        } else if (this.password === undefined) {
            alert('未輸入密碼!');
        }
        console.log('account : ', this.account , 'password : ', this.password);
    }

    opendialog(): void {
        const dialogRef = this.dialog.open(CreateDialogComponent, {
            width: '600px',
            // height: '700px',
            data: {
                addaccont: this.addaccount,
                addpassword: this.addpassword,
                repassword: this.repassword,
                staffnum: this.staffnum,
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.addaccount = res[0];
                this.addpassword = res[1];
                this.repassword = res[2];
                this.staffnum = res[3];
            }
            // console.log(res);
        });
    }

}
