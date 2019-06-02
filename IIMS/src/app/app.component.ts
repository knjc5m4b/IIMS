import { Component, Injector } from '@angular/core';
import { Food } from './main/contents/test/yoriko/yorikotest.component';
import { Url } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'IIMS';
  opened: true;
  menu: Menu[] = [
    {value: 'role1' , viewValue: '職缺刊登', routerLink: '/postjob'},
    {value: 'role2' , viewValue: '檢視面試者名單', routerLink: '/postjob'},
    {value: 'role3' , viewValue: 'Angela', routerLink: '/angela'},
    {value: 'role4' , viewValue: 'Yoriko', routerLink: '/yoriko'},
    {value: 'role5' , viewValue: 'Sindy', routerLink: '/sindy'},
    {value: 'role6' , viewValue: 'Zack', routerLink: '/zack'},
  ];
  constructor(
     injector:　Injector
  ) {
    // super(injector);
  }

}
export interface Menu {
  value: string;
  viewValue: string;
  routerLink: string;
}
