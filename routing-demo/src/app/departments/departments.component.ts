import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
    public departments = [
        {id: 1, name: 'Angular'},
        {id: 3, name: 'Node.Js'},
        {id: 3, name: 'MangoDb'},
        {id: 4, name: 'Mysql'},
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onSelect(id) {
        this.router.navigate(['departments',  id]);
    }

}
