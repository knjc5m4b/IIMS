import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
    providedIn: 'root'
})

export class InterviewService {

    constructor(
        private http: HttpClient,
        // private ngxXml2jsonService: NgxXml2jsonService,
        // public snackBar: MatSnackBar
    ) {}
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':
                'https://netcoretri30days.azurewebsites.net',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Access-Control-Max-Age': '86400'
        })
    };

    // openSnackBar(message: string, action: string) {
    //     this.snackBar.open(message, action, {
    //       duration: 1000
    //       // horizontalPosition: 'right'
    //     });
    // }

    selectdata(data): Observable<any> {
        const getURL = 'http://127.0.0.1/src/assets/db/selectinterview.php';
        return this.http.post(getURL, data);
    }

    HandleError(e: any): void {
        // console.log(e);
        alert(e.error.error);
    }
}

