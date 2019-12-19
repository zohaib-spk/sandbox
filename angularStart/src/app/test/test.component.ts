import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
        <h3>My name is {{name}}</h3>
        <h3>{{getWelcomeMessage()}}</h3>
        <h4>Site Url : {{getSiteUrl()}}</h4>
    `,
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    public name = 'Zohaib Akram';

    constructor() {
    }

    ngOnInit() {
    }

    getWelcomeMessage() {
        return 'Welcome ' + this.name;
    }

    getSiteUrl() {
        return window.location.href;
    }

}
