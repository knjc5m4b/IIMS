import { Component, OnInit } from '@angular/core';
import { Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField, MatSidenav, MatDialog, MatDialogRef, MatTableDataSource, MatPaginator } from '@angular/material';
import { TabDialogComponent } from '../../Home/tab-dialog/tab-dialog.component';
import Swiper from 'swiper';
import {MatSelectModule} from '@angular/material/select';
import {MatInput} from '@angular/material/input';

@Component ({
    selector: 'app-job-posting-view',
    templateUrl: './job-posting-view.component.html',
    styleUrls: ['./job-posting-view.component.css']
})


export class PostingJobComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'email'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input() name: string;
    @Input() content: string;
    @Input() tabname: string;
    @Input() tabcontent: string;
    tabimage: null;
    @ViewChild('sidenav') sidenav: MatSidenav;

    conitionType: ConditionType[] = [
        {value: '0', viewValue: '工作條件'},
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
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '', weight: 1, symbol: '', email: '123@gmail.com'},
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


