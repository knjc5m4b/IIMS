import { Component, OnInit } from '@angular/core';
import { Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField, MatSidenav, MatDialog, MatDialogRef, MatTableDataSource, MatPaginator } from '@angular/material';
import { TabDialogComponent } from '../../Home/tab-dialog/tab-dialog.component';
import Swiper from 'swiper';
import {MatSelectModule} from '@angular/material/select';
import {MatInput} from '@angular/material/input';

@Component ({
    selector: 'app-zacktest-component',
    templateUrl: './zacktest.component.html',
    styleUrls: ['./zacktest.component.css'],
})


export class ZackTestComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input() name: string;
    @Input() content: string;
    @Input() tabname: string;
    @Input() tabcontent: string;
    tabimage: null;
    @ViewChild('sidenav') sidenav: MatSidenav;

    conitionType: ConditionType[] = [
        {value: '0', viewValue: '工作內容'},
        {value: '1', viewValue: '接受身份'},
        {value: '2', viewValue: '工作經歷'},
        {value: '3', viewValue: '學歷要求'},
        {value: '4', viewValue: '語文條件'},
        {value: 'tacos-5', viewValue: '擅長工具'},
        {value: 'tacos-6', viewValue: '工作技能'},
        {value: 'tacos-7', viewValue: '上班時段'},
        {value: 'tacos-8', viewValue: '休假制度'},
        {value: 'tacos-9', viewValue: '工作待遇'},
        {value: 'tacos-10', viewValue: '工作派遣公司額外福利'},
        {value: 'tacos-11', viewValue: '出差外派'},
        {value: 'tacos-12', viewValue: '聯絡資訊'},
        {value: 'tacos-13', viewValue: '自訂義'}
      ];

      @Input() phonenumber: string;
      conditions: TheCondition[] = [];
      textss: [] = [];

      ngOnInit() {
        this.dataSource.paginator = this.paginator,
        this.conditions.push(new TheCondition());
      }
      add() {
          this.conditions.push(new TheCondition());
      }

      remove(index: number) {
        this.conditions.splice(index, 1);
      }

}


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
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
export interface ConditionType {
    value: string;
    viewValue: string;
  }

export class TheCondition {
  type: string;
  value: string;
  other: string;
}


  /**
   * @title Basic select
   */
/*------------------------------------------------------------------------*/


