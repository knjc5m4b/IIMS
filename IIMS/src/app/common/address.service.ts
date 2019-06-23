import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
    providedIn: 'root'
})

export class AddressService {

    constructor(
        private http: HttpClient,
        private ngxXml2jsonService: NgxXml2jsonService,
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

    getCityData(): Observable<any> {
        const URL = '../../assets/address/addCity.json';
        return this.http.get<any>(URL, this.httpOptions);
    }

    getAreaData(code: string): Observable<any> {
        // const getURL = '../../assets/address/addArea' + code + '.json';
        const getURL = 'https://api.nlsc.gov.tw/other/ListTown/' + code;
        return this.http.get<any>(getURL);
    }

    HandleError(e: any): void {
        // console.log(e);
        alert(e.error.error);
    }
}

