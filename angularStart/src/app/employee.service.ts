import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor() {
    }

    getEmployeesData() {
        return [
            {id: 1, name: 'zohaib', age: 24},
            {id: 2, name: 'zohaib', age: 24},
            {id: 3, name: 'zohaib', age: 24},
            {id: 4, name: 'zohaib', age: 24},
            {id: 5, name: 'zohaib', age: 24},
            {id: 6, name: 'zohaib', age: 24}
        ];
    }
}
