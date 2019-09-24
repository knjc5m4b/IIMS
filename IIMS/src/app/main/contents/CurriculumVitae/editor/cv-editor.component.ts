import { AddressService } from '../../../../common/address.service';
import { Component, Input, OnInit, Injector, forwardRef, Inject } from '@angular/core';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';
import { X2JS } from '../../../../../../node_modules/xml2js';


import { HttpErrorResponse } from '@angular/common/http';
import { AddCityDetail } from 'src/app/common/addCity_detail';
import { AddAreaDetail } from 'src/app/common/addArea_detail';
import * as intlTelInput from '../../../../../../node_modules/intl-tel-input';
import { TimeoutError } from 'rxjs';
import { CVService } from 'src/app/common/cv.service';

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
  @Input() phonenum: string;
  @Input() self: string;
  @Input() address: string;
  @Input() money: string;
  @Input() worktype: string;
  @Input() workname: string;
  @Input() workmoney: string;
  @Input() service: string;
  @Input() school: string;
  @Input() department: string;
  @Input() license: string;
  @Input() licensefile: any;


  // @Input() seletctcitydata: string;
  @Input() seletctareadata: string;
  @Input() seletctedudata: string;
  @Input() tool: string;
  @Input() workyears: string;

  @Input() seletctL: string;
  @Input() seletctaL: string;
  @Input() seletctaS: string;
  @Input() seletctaR: string;
  @Input() seletctaW: string;
  alevel: string;

  @Input() seletctcL: string;
  @Input() seletctcS: string;
  @Input() seletctcR: string;
  @Input() seletctcW: string;
  clevel: string;

  @Input() seletcteL: string;
  @Input() seletcteS: string;
  @Input() seletcteR: string;
  @Input() seletcteW: string;
  elevel: string;

  @Input() recommendN: string;
  @Input() recommendP: string;
  @Input() recommendc: string;
  review: number;

  iti: any;
  recommendC: HTMLInputElement;
  phoneInput: HTMLInputElement;
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
  slideimage: any;
  otherlans: boolean;
  pdffile: [];

  pdfall: any;
  pdfn: string;
  pdft: string;
  pdfs: string;
  pdftmp: string;

  firstyear = 60 * 60 * 24 * 365 * 14 * 1000;
  secondyear = 60 * 60 * 24 * 366 * 4 * 1000;
  // 18年將經過4個閏年14平年
  date = new Date();
  minDate = moment(new Date(1919, 0, 1));
  maxDate = moment(this.date.getTime() - this.firstyear - this.secondyear);
  yearname = '';
  birthdate = moment(this.brdate).format('YYYY-MM-DD');

  // birthdate = this.brdate.getDate() / (60 * 60 * 24 * 365 * 1000);
  // birthd = this.birthdate.toString();
  // birthmon = this.brdate.getMonth() / (60 * 60 * 24 * 365 * 1000);

  // birthmonth = this.birthmon.toString();
  // birthyaer = this.brdate.getFullYear().toString();
  // birth = new Text(this.birthyaer && '/' && this.birthmon && '/' && this.birthdate);

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

  Language: Education5[] = [
    {row: 1, level: '不懂'},
    {row: 2, level: '略通'},
    {row: 3, level: '中等'},
    {row: 4, level: '精通'}
  ];

  Languages: Education6[] = [
    {row: 1, Language: '日文'},
    {row: 2, Language: '韓文'},
    {row: 3, Language: '法文'},
    {row: 4, Language: '德文'},
    {row: 5, Language: '俄文'},
    {row: 6, Language: '泰文'},
    {row: 7, Language: '印尼文'},
    {row: 8, Language: '印度文'},
    {row: 9, Language: '越南文'},
    {row: 10, Language: '高棉文'},
    {row: 11, Language: '馬來文'},
    {row: 12, Language: '緬甸文'},
    {row: 13, Language: '義大利文'},
    {row: 14, Language: '菲律賓文'},
    {row: 15, Language: '阿拉伯文'},
    {row: 16, Language: '西班牙文'},
    {row: 17, Language: '葡萄牙文'}
  ];

  data: Personaldata = {familyname: this.familyname, givenname:  this.givenname , gender: this.gender, born: this.birthdate,
    email: this.email, phone: this.phonenum, service: this.service, address: this.address, school: this.school, department: this.department,
    salary: this.money, experience: this.workyears, category: this.worktype, position: this.workname, csalary: this.workmoney,
    seletctcL: this.seletctcL, seletctcS: this.seletctcS, seletctcR: this.seletctcR, seletctcW: this.seletctcW,
    seletcteL: this.seletcteL, seletcteS: this.seletcteS, seletcteR: this.seletcteR, seletcteW: this.seletcteW,
    seletctL: this.seletctL, seletctaL: this.seletctaL, seletctaS: this.seletctaS, seletctaR: this.seletctaR, seletctaW: this.seletctaW,
    licensename: this.license, license: this.slideimage, antobiography: this.self, transportation: this.tool,
    rename: this.recommendN, reunits: this.recommendP, rephone: this.recommendc, review: this.review};

  file: UploaderPDF = {file: this.pdfall, name: this.pdfn, type: this.pdft, size: this.pdfs, tmp_name: this.pdftmp};

  constructor(
    // private addressService: AddressService,
    private cvservice: CVService,
    injector: Injector,
  ) {}

  ngOnInit() {
    console.log('開始');
    this.onint();
    this.otherlans = false;
    this.review = 0;
  }

  onint() {
    // this.getCityData();

    this.phoneInput = document.querySelector('#phoneNum');
    this.iti = intlTelInput(this.phoneInput, {
      initialCountry: 'tw',
      separateDialCode: true,
      utilsScript: '../../../../../assets/js/utils.js',
    });

    this.recommendC = document.querySelector('#recommendNum');
    this.iti = intlTelInput(this.recommendC, {
      initialCountry: 'tw',
      separateDialCode: true,
      utilsScript: '../../../../../assets/js/utils.js',
    });
  }

  addlanguage() {
    this.otherlans = true;
  }

  removelanguage() {
    this.otherlans = false;
  }

  // getCityData() {
  //   this.addressService.getCityData().subscribe(
  //     (response: any) => {
  //       this.allcity = response;
  //       // this.allcity = response.X2JS;
  //       console.log(this.allcity);
  //     },
  //     (error: HttpErrorResponse) => this.addressService.HandleError(error)
  //   );
  // }
  // getAreaData(code: string) {
  //   this.addressService.getAreaData(code).subscribe(
  //     (response: any) => {
  //       this.allarea = response;
  //       console.log(this.allarea);
  //     },
  //     (error: HttpErrorResponse) => this.addressService.HandleError(error)
  //   );
  // }

  onSelectFile(event) {
    console.log(event, this.files.values, this.licensefile);
    console.log(event.target.files[0], event.target.files[0].name);
    console.log(event.target.files[0].tmp_name);

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
        this.slideimage = reader.result;
        // this.allimages.push(this.slideimage);
        console.log(this.slideimage);
        return this.slideimage;
    };

    // this.pdfall = event.target.files[0];
    this.pdfn = event.target.files[0];
    console.log(this.pdfn);

    // this.pdft = event.target.files[0].type;
    // this.pdfs = event.target.files[0].size;
    // this.pdftmp = event.target.files[0].tmp_name;
  }

  uploader() {
    this.file.file = this.pdfall;
    this.file.name = this.pdfn;
    this.file.type = this.pdft;
    this.file.size = this.pdfs;
    this.file.tmp_name = this.pdftmp;
    console.log(this.file);

    this.cvservice.uploader(this.file).subscribe(
      (response: any) => {
          if (response != null) {
              // alert(response) ;
              location.href = './#Home' ;
          } else {
              alert('儲存失敗!');
          }
      },
      (error: HttpErrorResponse) => this.cvservice.HandleError(error)
    );
  }

  // getUrl(index: number) {
  //   let i = 0;
  //   for (i = 0; i < this.files.length; i + 1 ) {
  //     console.log('i:', i, this.files[i]);
  //     // console.log(this.images[i], this.slideimage);
  //     // if (this.files.length > 1) {
  //     //     this.files.splice(index, 1);
  //     // }
  //     if (this.files.length < 6) {
  //         const reader = new FileReader();
  //         reader.readAsDataURL(this.files[i]);
  //         reader.onload = () => {
  //             this.slideimage = reader.result;
  //             // this.allimages.push(this.slideimage);
  //             console.log(this.slideimage);
  //             return this.slideimage;
  //         };
  //     }
  //     i = i + 1;
  //   }
  // }

    // getDate(index: number) {
    //   this.getUrl(index);
    //   return new Date();
    // }

    reviewdata() {
      this.review = 1;
    }

    submit() {
        this.data.familyname = this.familyname && this.givenname;
        this.data.givenname = this.familyname && this.givenname;
        this.data.gender = this.gender;
        this.data.born = this.birthdate;
        this.data.email = this.email;
        this.data.phone = this.phonenum;
        this.data.service = this.service;
        this.data.address = this.address;
        this.data.school = this.school;
        this.data.department = this.department;
        this.data.salary = this.money;
        this.data.experience = this.workyears;
        this.data.category = this.worktype;
        this.data.position = this.workname;
        this.data.csalary = this.workmoney;
        this.data.licensename = this.license;
        this.data.license = this.slideimage;
        this.data.antobiography = this.self;
        this.data.transportation = this.tool;
        this.data.rename = this.recommendN;
        this.data.reunits = this.recommendP;
        this.data.rephone = this.recommendc;
        this.data.seletctL = this.seletctL;
        this.data.seletctaL = this.seletctaL;
        this.data.seletctaS = this.seletctaS;
        this.data.seletctaR = this.seletctaR;
        this.data.seletctaW = this.seletctaW;
        this.data.seletctcL = this.seletctcL;
        this.data.seletctcS = this.seletctcS;
        this.data.seletctcR = this.seletctcR;
        this.data.seletctcW = this.seletctcW;
        this.data.seletcteL = this.seletcteL;
        this.data.seletcteS = this.seletcteS;
        this.data.seletcteR = this.seletcteR;
        this.data.seletcteW = this.seletcteW;
        this.data.review = this.review;

        console.log(this.familyname, this.givenname, this.gender, this.birthdate, this.service,
          this.phonenum, this.email, this.address, this.school, this.department, this.money,
          this.workyears, this.worktype, this.workname, this.workmoney,
          this.seletctcL, this.seletctcS, this.seletctcR, this.seletctcW,
          this.seletcteL, this.seletcteS, this.seletcteR, this.seletcteW,
          this.license, this.files,
          this.self, this.tool,
          this.recommendN, this.recommendP, this.recommendc);

        this.cvservice.insertUserData(this.data).subscribe(
              (response: any) => {
                  if (response != null) {
                      // alert(response) ;
                      location.href = './#Home' ;
                  } else {
                      alert('儲存失敗!');
                  }
              },
              (error: HttpErrorResponse) => this.cvservice.HandleError(error)
            );
    }

}

export interface Education {
  row: number;
  education: string;
}
export interface UploaderPDF {
  file: any;
  name: string;
  type: string;
  size: string;
  tmp_name: string;
}

export interface Personaldata {
  familyname: string;
  givenname: string;
  gender: string;
  born: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  school: string;
  department: string;
  salary: string;
  experience: string;
  category: string;
  position: string;
  csalary: string;
  licensename: string;
  license: string;
  antobiography: string;
  transportation: string;
  rename: string;
  reunits: string;
  rephone: string;
  seletctL: string;
  seletctaL: string;
  seletctaS: string;
  seletctaR: string;
  seletctaW: string;
  seletctcL: string;
  seletctcS: string;
  seletctcR: string;
  seletctcW: string;
  seletcteL: string;
  seletcteS: string;
  seletcteR: string;
  seletcteW: string;
  review: number;
}

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

export interface Education5 {
  row: number;
  level: string;
}

export interface Education6 {
  row: number;
  Language: string;
}
