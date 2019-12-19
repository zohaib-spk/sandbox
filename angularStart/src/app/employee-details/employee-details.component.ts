import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    public employee = [];
    public errorMsg = '';

    constructor(private _employeeService: EmployeeService) {
    }

    ngOnInit() {
        this._employeeService.getEmployeesData().subscribe(data => this.employee = data, error => this.errorMsg = error
        );
    }

}
