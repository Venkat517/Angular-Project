import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private _url: string = 'http://localhost:3000/employees';


constructor(private _http: HttpClient) {}
  getEmployees(): Observable<Employee[]> {
    console.log('🔍 Service: hitting API at ' + this._url, this._http.get<Employee[]>(this._url));
    return this._http.get<Employee[]>(this._url);
  }

 addEmployee(employee: Employee): Observable<Employee> {
  console.log('Added Employee', employee + 'Successfully');
  return this._http.post<Employee>(this._url, employee);
}

deleteEmployee(id: number | string): Observable<void> {
  return this._http.delete<void>(`${this._url}/${id}`);
}

updateEmployee(employee: Employee): Observable<Employee> {
  return this._http.put<Employee>(`${this._url}/${employee.id}`, employee);
}


}
