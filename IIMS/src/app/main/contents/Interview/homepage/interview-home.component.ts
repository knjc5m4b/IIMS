import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-interview-home',
    templateUrl: './interview-home.component.html',
    styleUrls: ['./interview-home.component.css']
})
export class InterviewHomeComponent {
    @Input() name: string;
    @Input() phonenumber: string;
    texts: [] = [];
    textss: [] = [];
    allname: [] = [];
    indexnum: number;

    add() {
        while (this.indexnum > this.allname.length) {
            this.indexnum += 1;
        }
        this.texts.push(name);
    }
    addnum() {
        this.textss.push(name);
    }
    remove(index: number) {
        this.texts.splice(index, 1);
        console.log(this.allname);
    }
    removenum(index: number) {
        this.textss.splice(index, 1);
    }
}
