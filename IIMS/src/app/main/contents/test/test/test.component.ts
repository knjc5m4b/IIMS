import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material';

@Component ({
    selector: 'app-test-component',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent {
    @Input() name: string;
    @Input() content: string;
    @ViewChild('sidenav') sidenav: MatSidenav;

    reason = '';


    tabIndex = 1;
    contents = '';
    tabs = [];
    selected = new FormControl(0);

    addTab() {
        if (this.name !== undefined) {
            this.tabs.push(this.name);
            this.selected.setValue(this.tabs.length);
            this.name = '';
        } else {
            alert('name is null!');
        }
    }
    removeTab(index: number) {
        this.tabs.splice(index, 1);
    }

    submit() {
        if (this.content !== undefined) {
            this.contents = this.content;
        } else {
            alert('name is null!');
        }
    }
}
