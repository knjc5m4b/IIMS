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

    add() {
        this.texts.push(name);
    }
    addnum() {
        this.textss.push(name);
    }
    remove(index: number) {
        this.texts.splice(index, 1);
    }
    removenum(index: number) {
        this.textss.splice(index, 1);
    }
}
