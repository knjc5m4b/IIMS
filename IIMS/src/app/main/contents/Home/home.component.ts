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


  constructor(
      private dialog: MatDialog,
  ) {
  }
    public slides = [
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/1912/production/_105981460_d9ff6226-aae3-4bba-8634-d26742299c80.jpg',
      'https://pics.ettoday.net/images/1294/d1294597.jpg',
      'http://p3.pstatp.com/large/102000012c2e9ed947aa',
      'https://i1.read01.com/SIG=22kd5l7/30466c744479714e6c39.jpg',
      'assets/image/cat1.jpg',
      'assets/image/cat.jpg',
    ];

    removeTab(index: number) {
        this.tabs.splice(index, 1);
    }

    opendialog(): void {
        const dialogRef = this.dialog.open(TabDialogComponent, {
            width: '500px',
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
}
