import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SortByDobComponent } from './sort-by-dob/sort-by-dob.component';
import { SortByJoinDateComponent } from './sort-by-join-date/sort-by-join-date.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: "users", component: EmployeeListComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'create-user', component: CreateEmployeeComponent},
  {path: 'update-user/:id', component: UpdateEmployeeComponent},
  {path: 'sort-by-dob', component: SortByDobComponent},
  {path: 'sort-by-join-date', component: SortByJoinDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
