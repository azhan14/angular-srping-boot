import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  searchOption: string = "null";
  searchText: any = "";
  pathEndPoints:any = "";
  constructor(private employeeService: EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.employeeService.getUserList().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id: number){
    this.router.navigate(["update-user",id])
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }
  
  onSearch(){
    this.searchText = "";
  }

  onSearchText(){
    this.pathEndPoints = this.searchOption+"/"+this.searchText;
    this.employeeService.getUserSearchedBy(this.pathEndPoints).subscribe(data => {
      this.employees = data;
    })
  }

}
