import { Component, ViewChild, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-question-component',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})

export class QuestionComponent {

    Q1: string;
    A1: string;
    Q2: string;
    A2: string;
    Q3: string;
    A3: string;

    @Input() texts: [] = [];

    constructor(
    ) {
    }

    add() {
        this.texts.push(name);
    }
    remove(index: number) {
        this.texts.splice(index, 1);
    }

    changed(event) {
        console.log(event.target.value);
        this.Q1 = event.target.value;
    }
}
