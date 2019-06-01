import { Component, ViewChild, Input} from '@angular/core';
import { SwiperComponent, SwiperDirective} from 'ngx-swiper-wrapper';
import { MatDialog} from '@angular/material';
import { TabDialogComponent } from './tab-dialog/tab-dialog.component';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    @ViewChild(SwiperComponent) componentRef: SwiperComponent;
    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
    @Input() name: string;
    @Input() content: string;

    tabname: string;
    tabcontent: string;
    tabimage: any;

    tabs = [];
    selected = new FormControl(0);

    files: File[] = [];
    progress: number;
    dragFiles: any;
    validComboDrag: any;
    lastInvalids: any;
    fileDropDisabled: any;
    baseDropValid: any;
    lastFileAt: Date;
    slideimage: any;

  constructor(
      private dialog: MatDialog,
  ) {
  }
    public slides = [
        'assets/image/addlogo.jpg',
    ];

    removeTab(index: number) {
        this.tabs.splice(index, 1);
    }

    addslides() {
        this.slides.push(this.slideimage);
        this.selected.setValue(this.slides.length);
    }

    removeslides(index: number) {
        this.slides.splice(index, 1);
    }

    opendialog(): void {
        const dialogRef = this.dialog.open(TabDialogComponent, {
            width: '600px',
            height: '700px',
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

    getDate(index: number) {
        console.log(this.files);

        if (this.files.length > 1) {
            this.files.splice(index, 1);
            const reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.onload = () => {
                this.slideimage = reader.result;
            };
        } else {
            const reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.onload = () => {
                this.slideimage = reader.result;
            };
        }
        return new Date();
    }
}
