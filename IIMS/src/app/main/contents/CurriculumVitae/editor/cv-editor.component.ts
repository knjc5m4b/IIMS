import { AddressService } from '../../../../common/address.service';
import { Component, Input, OnInit, Injector, forwardRef, Inject } from '@angular/core';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';
import { X2JS } from '../../../../../../node_modules/xml2js';


import { HttpErrorResponse } from '@angular/common/http';
import { AddCityDetail } from 'src/app/common/addCity_detail';
import { AddAreaDetail } from 'src/app/common/addArea_detail';
@Component({
    selector: 'app-cv-component',
    templateUrl: './cv-editor.component.html',
    styleUrls: ['./cv-editor.component.css']
})
export class CVEditorComponent implements OnInit {

    @Input() familyname: string;
    @Input() givenname: string;
    @Input() gender: string;
    @Input() brdate: string;
    @Input() email: string;

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

    education: Education[] = [
      {row: 1, education: '博士'},
      {row: 2, education: '碩士'},
      {row: 3, education: '學士'},
      {row: 4, education: '副學士'},
      {row: 5, education: '高中'},
      {row: 6, education: '國中(含)以下'},
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
}

export interface Education {
  row: number;
  education: string;
}
