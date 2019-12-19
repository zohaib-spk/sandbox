import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {EmployeeService} from './employee.service';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        EmployeeDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
