import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmploye} from './employee';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private dataUrl = './assets/employee.json';

    constructor(private http: HttpClient) {
    }

    getEmployeesData(): Observable<IEmploye[]> {
        return this.http.get<IEmploye[]>(this.dataUrl);

    }
}
