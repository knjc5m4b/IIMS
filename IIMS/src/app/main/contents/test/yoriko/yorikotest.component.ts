import { Component } from '@angular/core';
import { Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav, MatDialog, MatDialogRef } from '@angular/material';
import { TabDialogComponent } from '../../Home/tab-dialog/tab-dialog.component';
import Swiper from 'swiper';
import {MatSelectModule} from '@angular/material/select';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

@Component ({
    selector: 'app-yorikotest-component',
    templateUrl: 'yorikotest.component.html',
    styleUrls: ['yorikotest.component.css'],
})
export class YorikoTestComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
    @Input() name: string;
    @Input() content: string;
    @Input() tabname: string;
    @Input() tabcontent: string;
    tabimage: null;
    @ViewChild('sidenav') sidenav: MatSidenav;

    con: Food[] = [
        {value: 'steak-0', viewValue: '工作內容'},
        {value: 'pizza-1', viewValue: '接受身份'},
        {value: 'tacos-2', viewValue: '工作經歷'},
        {value: 'tacos-3', viewValue: '學歷要求'},
        {value: 'tacos-4', viewValue: '語文條件'},
        {value: 'tacos-5', viewValue: '擅長工具'},
        {value: 'tacos-6', viewValue: '工作技能'},
        {value: 'tacos-7', viewValue: '上班時段'},
        {value: 'tacos-8', viewValue: '休假制度'},
        {value: 'tacos-9', viewValue: '工作待遇'},
        {value: 'tacos-10', viewValue: '工作派遣公司額外福利'},
        {value: 'tacos-11', viewValue: '出差外派'},
        {value: 'tacos-12', viewValue: '聯絡資訊'}
      ];

      @Input() phonenumber: string;
      texts: [] = [];
      textss: [] = [];
      add() {
          this.texts.push(name);
      }
      addnum() {
          this.textss.push(name);
      }
      remove(index: number) {
          this.texts.splice(index, 1);
      }
      removenum(index: number) {
          this.textss.splice(index, 1);
      }
}


export interface Food {
    value: string;
    viewValue: string;
  }

  /**
   * @title Basic select
   */




