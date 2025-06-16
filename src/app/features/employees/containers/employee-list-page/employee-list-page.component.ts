import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as EmployeeActions from '../../state/employee.actions';
import { selectAllEmployees, selectEmployeeLoading } from '../../state/employee.selectors';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from '../../employee-table/employee-table.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list-page',
  standalone: true,
  imports: [CommonModule, EmployeeTableComponent, RouterModule],
  templateUrl: './employee-list-page.component.html',
  styleUrls: ['./employee-list-page.component.scss']
})
export class EmployeeListPageComponent implements OnInit {
employees$!: Observable<Employee[]>;
loading$!: Observable<boolean>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    console.log("Component Init")
  this.store.dispatch(EmployeeActions.loadEmployees());
  this.employees$ = this.store.select(selectAllEmployees);
  this.loading$ = this.store.select(selectEmployeeLoading);
  }
}
