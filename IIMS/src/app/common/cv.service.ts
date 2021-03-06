import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
    providedIn: 'root'
})

export class CVService {

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

    insertUserData(data): Observable<any> {
        const getURL = 'http://127.0.0.1/src/assets/db/cv-database.php';
        return this.http.post(getURL, data);
    }

    selectdata(name): Observable<any> {
        const getURL = 'http://127.0.0.1/src/assets/db/selectresume.php';
        return this.http.post(getURL, name);
    }

    uploader(file): Observable<any> {
        const getURL = 'http://127.0.0.1/src/assets/db/file-insert.php';
        return this.http.post(getURL, file);
    }

    uploaderd(): Observable<any> {
        const getURL = 'http://127.0.0.1/src/assets/db/file-insert.php';
        return this.http.get<any>(getURL);
    }

    HandleError(e: any): void {
        // console.log(e);
        alert(e.error.error);
    }
}

