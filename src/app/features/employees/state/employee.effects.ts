import { Employee } from './../models/employee.model';
import  * as EmployeeActions from './employee.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "../services/employee.service";
import { catchError, mergeMap, of, map } from 'rxjs';

@Injectable()
export class EmployeeEffects {
     constructor(
      private actions$: Actions,
      private employeeService: EmployeeService
    ) {}

    loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees), //when action is dispatched
      mergeMap(() => this.employeeService.getEmployees().pipe( // call the api here
        map((employee: Employee[]) => EmployeeActions.loadEmployeesSuccess({employee})), //dispatch success
        catchError((error: any) => of(EmployeeActions.loadEmployeesFailure ({error}))) // dispatch error
      ))
    ))
}
