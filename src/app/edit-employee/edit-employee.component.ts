import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employee : Employee={
    id: 0,
    employeeName: '',
    employeeEmail:'',
    employeePhone: '',
    employeeGender: '',
    employeeSalary: '',
    employeeRole: ''
    
  };
  constructor(private employeeService: EmployeeserviceService, private route: ActivatedRoute,private router: Router,){}
    
  ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getEmplById(id);
        console.log(id)
      });
    }
   
    getEmplById(id:number)
    {
      this.employeeService.getEmployeeById(id).subscribe((data) => {
        this.employee = data;
    });
  }
    
    updateEmployee(): void {
      this.employeeService.updateEmp(this.employee).subscribe({next:(data) => {
          this.router.navigate(["/employeelist"])
        },
        error:(err) => {
          console.log(err);
        }
      })
    }
}
