import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employee : Employee[]=[];
  
  constructor(private employeeService: EmployeeserviceService) { }

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee(): void {
    this.employeeService.getEmployee().subscribe((data)=>{
      this.employee=data;
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmp(id).subscribe(() => {
        this.loadEmployee();
      });
  }
}
