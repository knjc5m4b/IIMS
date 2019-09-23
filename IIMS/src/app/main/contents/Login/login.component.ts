import { Component, Input} from '@angular/core';
import { MatDialog} from '@angular/material';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { LoginService } from 'src/app/common/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    @Input() account: string;
    @Input() password: string;
    @Input() usertype: string;
    data: Accdata = {account: this.account, password: this.password, usertype: this.usertype};

    addaccount = '';
    addpassword = '';
    repassword = '';
    staffnum = '';

    constructor(
        private dialog: MatDialog,
        private loginservice: LoginService,
    ) {}

    login() {
        if (this.account === undefined) {
            alert('未輸入帳號!');
        } else if (this.password === undefined) {
            alert('未輸入密碼!');
        } else {
            if (this.usertype === 'interviewer') {
                this.data.usertype = this.usertype;
            } else if (this.usertype === 'interviewee') {
                this.data.usertype = this.usertype;
            }
            this.data.account = this.account;
            this.data.password = this.password;
            console.log(this.data);
            this.loginservice.getUserData(this.data).subscribe(
                (response: any) => {
                    if (response != null) {
                        // alert(response) ;
                        location.href = './#home' ;
                    } else {
                        alert('登入失敗!');
                    }
                },
                (error: HttpErrorResponse) => this.loginservice.HandleError(error)
              );
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

export interface Accdata {
    usertype: string;
    account: string;
    password: string;
}
