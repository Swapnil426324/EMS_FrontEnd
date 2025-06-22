import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  newEmployee: Employee = {
    id: 0,
    employeeName: '',
    employeeEmail:'',
    employeePhone: '',
    employeeGender: '',
    employeeSalary: '',
    employeeRole: ''

  }

  constructor(private employeeService: EmployeeserviceService, private router:Router){}

  addEmployees(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe({next:(data) => {
        this.router.navigate(["/employeelist"])
      },
      error:(err) => {
        console.log(err);
      }
    })
}
}
