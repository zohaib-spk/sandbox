import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    @Input('parentData') public getParentData;
    @Output() public childEvent = new EventEmitter();
    public name = 'Zohaib Akram';


    constructor() {
    }

    ngOnInit() {
    }

    sendDataToParent() {
        this.childEvent.emit('Kamran Shahid');
    }

}
