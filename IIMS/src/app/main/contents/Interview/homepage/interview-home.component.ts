import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { InterviewService } from 'src/app/common/interview.service';

@Component ({
    selector: 'app-interview-home',
    templateUrl: './interview-home.component.html',
    styleUrls: ['./interview-home.component.css']
})
export class InterviewHomeComponent implements OnInit {
    alldata: [];
    status: string;

    statusType: StatusType[] = [
        {value: '0', viewValue: '未審核'},
        {value: '1', viewValue: '審核通過'},
        {value: '2', viewValue: '審核未通過'},
      ];

    data: Statusdata = {statusnum: this.status};

    constructor(
        private interviewservice: InterviewService,
    ) {}

    ngOnInit(): void {
        this.Onint();
    }

    Onint() {
    }

    selectdata() {
        console.log(this.status);
        this.data.statusnum = this.status;
        this.interviewservice.selectdata(this.data).subscribe(
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
            (error: HttpErrorResponse) => this.interviewservice.HandleError(error)
        );
    }

}

export interface StatusType {
    value: string;
    viewValue: string;
}

export interface Statusdata {
    statusnum: string;
}

