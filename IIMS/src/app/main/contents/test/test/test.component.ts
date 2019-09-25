import { Component, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav, MatDialog, MatDialogRef, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR } from '@angular/material';
import { TabDialogComponent } from '../../Home/tab-dialog/tab-dialog.component';
import Swiper from 'swiper';
import { UploadFile } from 'ngx-file-drop';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector: 'app-test-component',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
    @Input() image: any;
    // files: File[] = [];
    // img: Img[] = [];
    // imgurl: any;
    // imgupload: boolean;
    // slideimage: any;
    // allimages: any[] = [];
    // slidedata = [];

    formData = new FormData();
    constructor(
        private httpClient: HttpClient,
    ) {
    }
    ngOnInit() {
    }

    fileUpload(event) {
        this.formData.append('file', event.target.files[0]);
        // const getURL = 'assets/pdf';
        // this.httpClient.post(getURL, this.formData).subscribe(
        //     (response: any) => {
        //         if (response != null) {
        //             alert('儲存成功') ;
        //             location.href = './#Home' ;
        //         } else {
        //             alert('儲存失敗!');
        //         }
        //     });
        console.log(this.formData);
    }

    // imgupload(event) {
    //     if (event.target.files && event.target.files.length >= 0) {
    //         let i: number;
    //         for (i = 0 ; i < event.target.files.length ; i ++) {
    //             const reader = new FileReader();
    //             reader.readAsDataURL(event.target.files[i]); // read file as data url
    //             reader.onload = () => { // called once readAsDataURL is completed
    //               this.slideimage = reader.result;
    //               this.allimages.push(this.slideimage);
    //               console.log(this.slideimage);
    //             };
    //         }
    //     }
    // }

    // deleteimg(index: number) {
    //     this.allimages.splice(index, 1);
    //     console.log('index:', index);
    //     // this.slideimage = '';
    //     // if (this.slideimage) {
    //     //     this.allimages.splice(index, 1);
    //     //     this.slideimage = '';
    //     // }
    // }
    // getUrl() {
    //     console.log(this.files);
    //     // if (this.image) {
    //     //     this.files.push(this.image);
    //     // }
    //     for (let i = 0 ; i < this.files.length ; i++) {
    //         if (this.files) {
    //             const reader = new FileReader();
    //             reader.readAsDataURL(this.files[i]);
    //             reader.onload = () => {
    //                 this.imgurl = reader.result;
    //                 this.img.push(this.imgurl);
    //                 this.imgupload = true;
    //                 console.log(this.img[i]);
    //             };
    //         }
    //     }
    // }
}

export interface Img {
    url: any;
}
