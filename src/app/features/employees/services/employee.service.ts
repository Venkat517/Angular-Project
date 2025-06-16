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
}
