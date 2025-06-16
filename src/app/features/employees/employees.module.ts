import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListPageComponent } from './containers/employee-list-page/employee-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EmployeeEffects } from './state/employee.effects';
import { employeeReducer } from './state/employee.reducer';


@NgModule({
  declarations: [
    EmployeeTableComponent,
    EmployeeFormComponent,
    EmployeeListPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
    StoreModule.forFeature('employee', employeeReducer),
    EffectsModule.forFeature([EmployeeEffects])
  ]
})
export class EmployeesModule { }
