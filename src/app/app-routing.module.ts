import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponentComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'employeelist',component:EmployeeListComponent
  },
  {
    path:'addemployee',component:AddEmployeeComponent
  },
  { 
    path: 'editemployee/:id', component: EditEmployeeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
