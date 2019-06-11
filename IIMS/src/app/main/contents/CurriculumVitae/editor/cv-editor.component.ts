import { AddressService } from '../../../../common/address.service';
import { Component, Input, OnInit, Injector, forwardRef, Inject } from '@angular/core';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';


import { HttpErrorResponse } from '@angular/common/http';
import { AddressDetail } from 'src/app/common/address_detail';

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
    citySelect: Array<AddressDetail> = new Array<AddressDetail>();
    areaSelect: Array<AddressDetail> = new Array<AddressDetail>();
    allcity: Array<AddressDetail> = new Array<AddressDetail>();
    allarea: Array<AddressDetail> = new Array<AddressDetail>();
    citydata: AddressDetail = new AddressDetail();
    areadata: AddressDetail = new AddressDetail();
    @Input() seletctcitydata: string;
    @Input() seletctareadata: string;
    newcity: Array<any>;
    newcities: Array<any>;
    newarea: Array<any>;
    newareas: Array<any>;
    citytotals = [0, 3610, 3915, 8740, 10881, 4084, 4106, 11608, 13495, 19053, 21339, 29414,
        34055, 36055, 36906, 38661, 41082, 45898, 53516, 53795, 54154, 58037 , 59074, 60926];
    // 台北尾 / 基隆尾 / 新北尾 / 宜蘭尾 / 連江頭 / 連江尾 / 新竹市尾(有混竹縣) / 新竹縣尾 / 桃園尾 / 苗栗尾 / 台中尾 /
    // 彰化尾 / 南投尾 / 嘉義市尾 / 嘉義縣尾 / 雲林尾 / 台南尾 / 高雄尾 /澎湖尾 / 金門尾 / 屏東尾 / 台東尾 / 花蓮尾

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
        this.addressService.getData().subscribe(
          (response: any) => {
            this.allcity = response;
            console.log(this.allcity);

            let i = 0;
            this.newcity = [];
            for (i = 0 ; i < this.allcity.length ; i++) {
                this.newcity.push(this.allcity[i].City);
            }

            const cityresult = new Set();
            const cityrepeat = new Set();
            this.newcity.forEach(res => {
                cityresult.has(res) ? cityrepeat.add(res) : cityresult.add(res);
            });
            console.log(cityrepeat);
            this.newcities = [];
            cityrepeat.forEach (res => {
                if (res !== '南海島') {
                    this.newcities.push(res);
                }
            });
            console.log(this.newcities);
          },
          (error: HttpErrorResponse) => this.addressService.HandleError(error)
        );
    }
    // getCitysData(item: AddressDetail) {
    //     this.citySelect = [];
    //     this.citydata = item;

    //     this.citySelect.push(item);
    //     console.log(this.citydata);
    //     this.addressService.openSnackBar(item.Zip5, item.Zip5);
    //     // return this.citySelect;
    //     console.log(this.seletctcitydata);
    // }

    getAreaData() {
        this.addressService.getData().subscribe(
          (response: any) => {
            this.allarea = response;
            let i = 0;
            let j = 0;
            this.newarea = [];
            for (j = 0 ; j <= 23 ; j++) {
                if ( j >= 0 && j <= 2 ) {
                    if (this.seletctcitydata === this.newcities[j]) {
                        for (i = this.citytotals[j] ; i < this.citytotals[j + 1] ; i++) {
                            if (this.seletctcitydata === this.allarea[i].City) {
                                this.newarea.push(this.allarea[i].Area);
                            }
                        }
                    }
                } else if ( j >= 7 && j <= 23 ) {
                    if (this.seletctcitydata === this.newcities[j]) {
                        for (i = this.citytotals[j + 1] ; i < this.citytotals[j + 2] ; i++) {
                            if (this.seletctcitydata === this.allarea[i].City) {
                                this.newarea.push(this.allarea[i].Area);
                            }
                        }
                    }
                } else {
                    if (this.seletctcitydata === this.newcities[3]) {
                        for (i = this.citytotals[5] ; i < this.citytotals[6] ; i++) {
                            if (this.seletctcitydata === this.allarea[i].City) {
                                this.newarea.push(this.allarea[i].Area);
                            }
                        }
                    } else if (this.seletctcitydata === this.newcities[4]) {
                        for (i = this.citytotals[3] ; i < this.citytotals[4] ; i++) {
                            if (this.seletctcitydata === this.allarea[i].City) {
                                this.newarea.push(this.allarea[i].Area);
                            }
                        }
                    } else if (this.seletctcitydata === this.newcities[5]) {
                        for (i = this.citytotals[4] ; i < this.citytotals[7] ; i++) {
                            if (this.seletctcitydata === this.allarea[i].City) {
                                this.newarea.push(this.allarea[i].Area);
                            }
                        }
                    } else if (this.seletctcitydata === this.newcities[6]) {
                        for (i = this.citytotals[4] ; i < this.citytotals[8] ; i++) {
                            if (this.seletctcitydata === this.allarea[i].City) {
                                this.newarea.push(this.allarea[i].Area);
                            }
                        }
                    }

                }
            }

            // for (i = 0 ; i < this.allarea.length ; i++) {
            //     if (this.seletctcitydata === this.allarea[i].City) {
            //         this.newarea.push(this.allarea[i].Area);
            //     }
            // }

            const arearesult = new Set();
            const arearepeat = new Set();
            this.newarea.forEach(res => {
                arearesult.has(res) ? arearepeat.add(res) : arearesult.add(res);
            });
            console.log(arearepeat);
            this.newareas = [];
            arearepeat.forEach (res => {
                this.newareas.push(res);
            });
            console.log(this.newareas);

          },
          (error: HttpErrorResponse) => this.addressService.HandleError(error)
        );
    }
    // getAreasData(item: AddressDetail) {
    //     this.areaSelect = [];
    //     this.areadata = item;

    //     this.areaSelect.push(item);
    //     console.log(this.areadata);
    //     this.addressService.openSnackBar(item.Zip5, item.Zip5);

    //     console.log(this.citySelect);
    // }

    // getRoadData() {
    //     this.addressService.getData().subscribe(
    //       (response: any) => {
    //         this.allroad = response;
    //         let i = 0;
    //         this.newroad = [];
    //         for (i = 0 ; i < this.allroad.length ; i++) {
    //             if (this.seletctcitydata === this.allroad[i].City) {
    //                 this.newarea.push(this.allroad[i].Area);
    //             }
    //         }

    //         const arearesult = new Set();
    //         const arearepeat = new Set();
    //         this.newarea.forEach(res => {
    //             arearesult.has(res) ? arearepeat.add(res) : arearesult.add(res);
    //         });
    //         console.log(arearesult);
    //         this.newareas = [];
    //         arearesult.forEach (res => {
    //             this.newareas.push(res);
    //         });
    //         console.log(this.newareas);
    //       },
    //       (error: HttpErrorResponse) => this.addressService.HandleError(error)
    //     );
    // }
}
