
import { Component, Injector, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'IIMS';
  menu: Menu[] = [
    {value: 'role1' , viewValue: '職缺刊登', routerLink: '/postjob', url: 'icon-briefcase'
    , children: [
        {value: 'role11' , viewValue: '新增職缺', routerLink: '/postjob', url: 'icon-briefcase'},
        {value: 'role12' , viewValue: '詳細職缺', routerLink: '/postjob', url: 'icon-briefcase'},
        {value: 'role11' , viewValue: '查閱職缺', routerLink: '/postjob', url: 'icon-briefcase'},
      ]
    },
    {value: 'role2' , viewValue: '檢視面試者名單', routerLink: '/interview', url: 'icon-address-book', children: [
      {value: 'role11' , viewValue: '進度回報', routerLink: '/interview', url: 'icon-briefcase'},
      {value: 'role11' , viewValue: '進度查詢', routerLink: '/interview', url: 'icon-briefcase'},
      {value: 'role11' , viewValue: '面試紀錄', routerLink: '/interview', url: 'icon-briefcase'},
      {value: 'role11' , viewValue: '面試記錄查閱', routerLink: '/interview', url: 'icon-briefcase'},
    ]},
    {value: 'role3' , viewValue: '履歷表', routerLink: '/cv', url: 'icon-profile'},
    {value: 'role4' , viewValue: '成員名單', routerLink: '/person', url: 'icon-user'},
    {value: 'role4' , viewValue: 'Q&A', routerLink: '/qa', url: 'icon-bubbles4'},
    {value: 'role4' , viewValue: 'Angela', routerLink: '/angela', url: 'icon-cog'},
    {value: 'role5' , viewValue: 'Yoriko', routerLink: '/yoriko', url: 'icon-cog'},
    {value: 'role6' , viewValue: 'Sindy', routerLink: '/sindy', url: 'icon-cog'},
    {value: 'role7' , viewValue: 'Zack', routerLink: '/zack', url: 'icon-cog'},
  ];

/*   constructor(
     injector:　Injector,
  ) {
    // super(injector);
  }
 */
  ngOnInit(): void {
  }
}
export interface Menu {
  value: string;
  viewValue: string;
  routerLink: string;
  url: string;
  children?: Menu[];
}

