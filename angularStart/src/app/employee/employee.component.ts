import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    public employee = [];

    constructor(private _employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.employee = this._employeeService.getEmployeesData();
    }

}
