import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }
 
  private apiUrl = 'http://localhost:8081/employee';

   getEmployee() {
    return this.http.get<Employee[]>(this.apiUrl);
   }

   addEmployee(employee:Employee) {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  getEmployeeById(eid: number) {
    return this.http.get<Employee>(`${this.apiUrl}/${eid}`);
  }

  //update course
  updateEmp(employee: Employee) {
    return this.http.put<Employee>(this.apiUrl, employee);
  }

  deleteEmp(cid: number) {
    return this.http.delete<any>(`${this.apiUrl}/${cid}`);
  }

}
