import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }

  getSortedEmployeeByDate(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/sortbydob`)
  }

  getSortedEmployeeByJoinDate(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/sortbyjoindate`)
  }

  getUserSearchedBy(pathEndPoint: string) : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/${pathEndPoint}`);
  }
}
