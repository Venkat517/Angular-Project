import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEmployees } from '../../state/employee.actions';
import { selectAllEmployees, selectEmployeeLoading } from '../../state/employee.selectors';

@Component({
  selector: 'app-employee-list-page',
  templateUrl: './employee-list-page.component.html',
  styleUrls: ['./employee-list-page.component.scss']
})
export class EmployeeListPageComponent {

  constructor(private store: Store) {}

  ngOnInit(): void {
  this.store.dispatch(loadEmployees());
}

employees$ = this.store.select(selectAllEmployees);
loading$ = this.store.select(selectEmployeeLoading);


}
