import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IEmploye} from './employee';
import {Observable,  throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private dataUrl = './asses/employee.json';

    constructor(private http: HttpClient) {
    }

    getEmployeesData(): Observable<IEmploye[]> {
        return this.http.get<IEmploye[]>(this.dataUrl).pipe(
            catchError(this.handleError)
        );

    }

    private handleError(error: HttpErrorResponse) {
        // console.log('testing',error.status);
        // if (error.error instanceof ErrorEvent) {
        //     // A client-side or network error occurred. Handle it accordingly.
        //     console.error('An error occurred:', error.error.message);
        // } else {
        //     console.error(
        //         `Backend error`);
        // }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}
