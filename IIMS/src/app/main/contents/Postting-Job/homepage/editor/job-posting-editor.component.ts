import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-job-posting-editor',
    templateUrl: './job-posting-editor.component.html',
    styleUrls: ['./job-posting-editor.component.css']
})
export class PostingJobEditorComponent {
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
