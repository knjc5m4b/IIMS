import { Component, ViewChild, Input, OnInit} from '@angular/core';
import { SwiperComponent, SwiperDirective} from 'ngx-swiper-wrapper';
import { MatDialog} from '@angular/material';
import { TabDialogComponent } from './tab-dialog/tab-dialog.component';
import { FormControl } from '@angular/forms';
import { SlideDialogComponent } from './slide-dialog/slide-dialog.component';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private dialog: MatDialog,
    ) {
    }
    @ViewChild(SwiperComponent) componentRef: SwiperComponent;
    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
    @Input() name: string;
    @Input() content: string;

    tabname: string;
    tabcontent: string;
    tabimage: any;

    tabs = [];
    selected = new FormControl(0);

    // files: File[] = [];
    // progress: number;
    // dragFiles: any;
    // validComboDrag: any;
    // lastInvalids: any;
    // fileDropDisabled: any;
    // baseDropValid: any;
    // lastFileAt: Date;
    slideimage: any;
    allimages: any[] = [];
    index: number;

    public slides = ['First'];

    ngOnInit(): void {
    }

    removeTab(index: number) {
        this.tabs.splice(index, 1);
    }

    // addslides() {
    //     this.slides.push();
    //     this.selected.setValue(this.slides.length);
    // }

    // removeslides(index: number) {
    //     this.slides.splice(index, 1);
    // }

    opendialog(): void {
        const dialogRef = this.dialog.open(TabDialogComponent, {
            width: '600px',
            // height: '700px',
            data: {
                tabs: this.tabs,
                selected: this.selected,
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.tabcontent = res[0];
                this.tabimage = res[1];
            }
            // console.log(res);
        });
    }

    openSlidedialog(): void {
        const dialogRef = this.dialog.open(SlideDialogComponent, {
            width: '600px',
            // height: '700px',
            data: {
                slideimage: this.slideimage,
                allimages: this.allimages,
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.slideimage = res[0];
                // this.tabimage = res[1];
            }
            // console.log(res);
        });
    }

    // getUrl(index: number) {
    //     let i = 0;
    //     for (i = 0; i < this.files.length; i + 1 ) {
    //         console.log('i:', i, this.files[i]);
    //         // console.log(this.images[i], this.slideimage);
    //         // if (this.files.length > 1) {
    //         //     this.files.splice(index, 1);
    //         // }
    //         if (this.files.length < 6) {
    //             const reader = new FileReader();
    //             reader.readAsDataURL(this.files[i]);
    //             reader.onload = () => {
    //                 this.slideimage = reader.result;
    //                 this.allimages.push(this.slideimage);
    //                 console.log(this.slideimage);
    //                 return this.slideimage;
    //             };
    //         }
    //         i = i + 1;
    //     }
    // }

    // getDate(index: number) {
    //     this.getUrl(index);
    //     return new Date();
    // }
}
