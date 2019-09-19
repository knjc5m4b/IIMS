import { Component, OnInit } from '@angular/core';
import { Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField, MatSidenav, MatDialog, MatDialogRef, MatTableDataSource, MatPaginator } from '@angular/material';
import { TabDialogComponent } from '../../Home/tab-dialog/tab-dialog.component';
import Swiper from 'swiper';
import {MatSelectModule} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
/*---------------------------------------------------------------------------*/
import { AddressService } from '../../../../common/address.service';
import { Injector, forwardRef, Inject } from '@angular/core';
import * as moment from 'moment';
import { Validators } from '@angular/forms';
import { X2JS } from '../../../../../../node_modules/xml2js';
import { HttpErrorResponse } from '@angular/common/http';
import { AddCityDetail } from 'src/app/common/addCity_detail';
import { AddAreaDetail } from 'src/app/common/addArea_detail';
// import * as intlTellnput from 'C:/Users/USER/Documents/GitHub/IIMS/IIMS/node_modules/intl-tel-input/build/js/intlTelInput.js';
// import * as intlTelInput from 'intl-tel-input';

@Component ({
    selector: 'app-yorikotest-component',
    templateUrl: 'yorikotest.component.html',
    styleUrls: ['yorikotest.component.css'],
})

export class YorikoTestComponent implements OnInit {

    @Input() familyname: string;
    @Input() givenname: string;
    @Input() gender: string;
    @Input() brdate: string;
    @Input() email: string;

    iti: any;
    phoneInput:　HTMLInputElement;
    el: any;
    tabimage: any;
    tabdata = [];
    files: File[] = [];
    progress: number;
    dragFiles: any;
    validComboDrag: any;
    lastInvalids: any;
    fileDropDisabled: any;
    baseDropValid: any;
    lastFileAt: Date;

    firstyear = 60 * 60 * 24 * 365 * 14 * 1000;
    secondyear = 60 * 60 * 24 * 366 * 4 * 1000;
    // 18年將經過4個閏年14平年
    date = new Date();
    minDate = moment(new Date(1919, 0, 1));
    maxDate = moment(this.date.getTime() - this.firstyear - this.secondyear);
    yearname = '';

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    item: any;
    items: Array<any>;
    citySelect: Array<AddCityDetail> = new Array<AddCityDetail>();
    areaSelect: Array<AddAreaDetail> = new Array<AddAreaDetail>();
    allcity: Array<AddCityDetail> = new Array<AddCityDetail>();
    allarea: Array<AddAreaDetail> = new Array<AddAreaDetail>();


    @Input() seletctcitydata: string;
    @Input() seletctareadata: string;
    @Input() seletctedudata: string;

    educationll: Education1[] = [
      {row: 1, educationll: '博士'},
      {row: 2, educationll: '碩士'},
      {row: 3, educationll: '學士'},
      {row: 4, educationll: '副學士'},
      {row: 5, educationll: '高中'},
      {row: 6, educationll: '國中(含)以下'},
  ];

  experience: Education2[] = [
      {row: 1, experience: '無'},
      {row: 2, experience: '未滿一年'},
      {row: 3, experience: '1~5年'},
      {row: 4, experience: '6~10年'},
      {row: 5, experience: '10~15年'},
      {row: 6, experience: '15以上'},
  ];


   Trans: Education4[] = [
      {row: 1, Trans: '汽車'},
      {row: 2, Trans: '機車'},
      {row: 3, Trans: '無'},
  ];


    constructor(
        private addressService: AddressService,
        injector: Injector,
    ) {}

    ngOnInit() {
        console.log('開始');
        this.onint();
    }

    onint() {
        this.getCityData();
    }
    getCityData() {
        this.addressService.getCityData().subscribe(
          (response: any) => {
            this.allcity = response;
            // this.allcity = response.X2JS;
            console.log(this.allcity);
          },
          (error: HttpErrorResponse) => this.addressService.HandleError(error)
        );
    }
    getAreaData(code: string) {
        this.addressService.getAreaData(code).subscribe(
          (response: any) => {
            this.allarea = response;
            console.log(this.allarea);
          },
          (error: HttpErrorResponse) => this.addressService.HandleError(error)
        );
    }
    /* ngOnIniz() {
      this.phoneInput = this.el.nativeElement.querySelector('#phoneNum');
      this.iti = intlTelInput(
      this.phoneInput,
        {
          allowDropdown: true,
          initialCountry: 'tw',
          separateDialCode: true
        }
      );
    } */

    // 以上為履歷表
    /*     displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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
      } */

      /*--------------------------------------------------------------------------------------------*/

}


/* export interface PeriodicElement {
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
} */

/*履歷*/
export interface Education1 {
  row: number;
  educationll: string;
}
export interface Education2 {
  row: number;
  experience: string;
}
export interface Education4 {
  row: number;
  Trans: string;
}


  /**
   * @title Basic select
   */
/*------------------------------------------------------------------------*/



