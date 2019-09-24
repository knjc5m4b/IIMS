import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from '../Login/login.component';
import { CVService } from 'src/app/common/cv.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-cv-component',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

    @Input() account: string;
    @Input() password: string;
    name: string;
    alldata: [];

    data: Selectdata = {name: this.name};
    constructor(
        private cvservice: CVService,
    ) {}
    ngOnInit(): void {
        console.log(this.account);
    }
    selectdata() {
        this.data.name = this.name;
        this.cvservice.selectdata(this.data).subscribe(
            (res: any) => {
                if (res != null) {
                    alert(res) ;
                    console.log(res);
                    this.alldata = res;
                    // location.href = './#Home' ;
                } else {
                    alert('搜尋失敗!');
                }
            },
            (error: HttpErrorResponse) => this.cvservice.HandleError(error)
        );
    }
}

export interface Selectdata {
    name: string;
  }
