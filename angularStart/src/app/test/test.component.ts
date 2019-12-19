import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    public disable = true;
    public name = 'Zohaib Akram';

    public fontClasses = {
        'text-danger': false,
        'text-success': true,
        'text-bold': true,
    };

    constructor() {
    }

    ngOnInit() {
    }

}
