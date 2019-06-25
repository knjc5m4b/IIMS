import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav, MatDialog, MatDialogRef } from '@angular/material';
import { TabDialogComponent } from '../../Home/tab-dialog/tab-dialog.component';
import Swiper from 'swiper';
import { UploadFile } from 'ngx-file-drop';

@Component ({
    selector: 'app-test-component',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})

export class TestComponent {
    @Input() name: string;
    @Input() content: string;
    @Input() tabname: string;
    @Input() tabcontent: string;
    tabimage: null;
    @ViewChild('sidenav') sidenav: MatSidenav;
    maxSize: 3000;
    files: File[] = [];
    progress: number;
    dragFiles: any;
    validComboDrag: any;
    lastInvalids: any;
    fileDropDisabled: any;
    baseDropValid: any;
    lastFileAt: Date;
    testimg: any;
    testimgs: any[string];
    index: number;
    arraytest: Arraytest[] = [
        {arrayid: 1 , arraycontent: this.testimgs},
        {arrayid: 2 , arraycontent: this.testimgs},
        {arrayid: 3 , arraycontent: this.testimgs},
        {arrayid: 4 , arraycontent: this.testimgs},
        {arrayid: 5 , arraycontent: this.testimgs},
        {arrayid: 6 , arraycontent: this.testimgs},
    ];

    constructor(
        public dialog: MatDialog,
        // public dialogRef: MatDialogRef<TabDialogComponent>,
    ) {
    }

    tabIndex = 1;
    contents = '';
    tabs = [];
    selected = new FormControl(0);
    myswiper: Swiper;

    // ngAfterViewInit() {
    //     this.myswiper = new Swiper('.swiper-container', {
    //         pagination: '.swiper-pagination',
    //         paginationClickable: true,
    //         nextButton: '.swiper-button-next',
    //         prevButton: '.swiper-button-prev',
    //         autoplay: 3000,
    //         spaceBetween: 30
    //     });
    // }

    addTab() {
        if (this.name === undefined || this.name === '' || this.name === null) {
            alert('name is null!');

        } else {
            this.tabs.push(this.name);
            this.selected.setValue(this.tabs.length);
        }
        this.name = '';
    }
    removeTab(index: number) {
        this.tabs.splice(index, 1);
    }

    submit() {
        if (this.content !== undefined) {
            this.contents = this.content;
        } else {
            alert('name is null!');
        }
    }


    getDate() {
        let i = 0;
        const reader = new FileReader();
        for ( i = 0 ; i < 6 ; i++ ) {
            reader.readAsDataURL(this.files[0]);
            reader.onload = () => {
                    this.testimg = reader.result;
                    this.testimgs[i] = this.testimg;
                    console.log(this.testimg);
                    return this.testimg;
            };
        }
        console.log(this.files);
        return new Date();
    }

    // opendialog() {
    //     const dialogRef = this.dialog.open(TabDialogComponent, {
    //         width: '250px',
    //         data: {
    //             tabname: this.tabname,
    //             tabcontent: this.tabcontent
    //         }
    //     });
    //     dialogRef.afterClosed().subscribe(res => {
    //         this.tabname = res;
    //         this.tabcontent = res;
    //     });
    // }

}


export interface Arraytest {
    arrayid: number;
    arraycontent: string;
}
