import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DepartmentsComponent} from './departments/departments.component';
import {EmployeesComponent} from './employees/employees.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DepartmentDetailComponent} from './department-detail/department-detail.component';

const routes: Routes = [
    {path: '', redirectTo: 'departments', pathMatch: 'full'},
    {path: 'departments', component: DepartmentsComponent},
    {path: 'departments/:id', component: DepartmentDetailComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponent = [DepartmentsComponent, DepartmentDetailComponent, EmployeesComponent];
