import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})

export class AddressService {

    constructor(
        private http: HttpClient,
        public snackBar: MatSnackBar
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

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 1000
          // horizontalPosition: 'right'
        });
    }

    getData(): Observable<any> {
        const URL = 'https://quality.data.gov.tw/dq_download_json.php?nid=5948&md5_url=17f17b629941c66e38783dbecc906c66';
        return this.http.get<any>(URL, this.httpOptions);
    }

    HandleError(e: any): void {
        // console.log(e);
        alert(e.error.error);
    }
}

