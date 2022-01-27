import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-sort-by-dob',
  templateUrl: './sort-by-dob.component.html',
  styleUrls: ['./sort-by-dob.component.css']
})
export class SortByDobComponent implements OnInit {
  employees: Employee[]
  constructor(private employeeService: EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.getSortedUsers();
  }

  private getSortedUsers(){
    this.employeeService.getSortedEmployeeByDate().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id: number){
    this.router.navigate(["update-user",id])
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getSortedUsers();
    })
  }

}
