import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav, MatDialog, MatDialogRef } from '@angular/material';
import { TabDialogComponent } from './tab-dialog/tab-dialog.component';
import Swiper from 'swiper';

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

    opendialog() {
        const dialogRef = this.dialog.open(TabDialogComponent, {
            width: '250px',
            data: {
                tabname: this.tabname,
                tabcontent: this.tabcontent
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            this.tabname = res;
            this.tabcontent = res;
        });
    }
}
