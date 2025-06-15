import { Component, Input } from '@angular/core';
import { Employee } from './../../models/employee.model';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  @Input() employees: Employee[] = [];

}
