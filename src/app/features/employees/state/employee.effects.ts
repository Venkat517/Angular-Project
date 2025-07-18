import { Employee } from './../models/employee.model';
import  * as EmployeeActions from './employee.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "../services/employee.service";
import { catchError, mergeMap, of, map, tap } from 'rxjs';

@Injectable()
export class EmployeeEffects {
     constructor(
      private actions$: Actions,
      private employeeService: EmployeeService
    ) {}

    loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees), //when action is dispatched
      tap(() => console.log('⚡ Effect triggered: calling API...')),
      mergeMap(() => this.employeeService.getEmployees().pipe( // call the api here
        tap(data => console.log('🌐 API returned:', data)),
        map((employees: Employee[]) => EmployeeActions.loadEmployeesSuccess({employees})), //dispatch success
        catchError((error: any) => of(EmployeeActions.loadEmployeesFailure ({error}))) // dispatch error
      ))
    ))

    addEmployee$ = createEffect(() =>
    this.actions$.pipe(
    ofType(EmployeeActions.addEmployee),
    mergeMap(({ employee }) =>
      this.employeeService.addEmployee(employee).pipe(
        map((newEmployee) => EmployeeActions.addEmployeeSuccess({ employee: newEmployee })),
        catchError((error) => of(EmployeeActions.addEmployeeFailure({ error: error.message })))
      )
    )
  )
);

deleteEmployee$ = createEffect(() =>
  this.actions$.pipe(
    ofType(EmployeeActions.deleteEmployee),
    tap(({ id }) => console.log('🗑️ Deleting employee with ID:', id)),
    mergeMap(({ id }) =>
      this.employeeService.deleteEmployee(id).pipe(
        map(() => {
          console.log('✅ Deleted successfully:', id);
          return EmployeeActions.deleteEmployeeSuccess({ id: +id });
        }),
        catchError((error) => {
          console.error('❌ Delete failed:', error);
          return of(EmployeeActions.deleteEmployeeFailure({ error }));
        })
      )
    )
  )
);

updateEmployee$ = createEffect(() =>
  this.actions$.pipe(
    ofType(EmployeeActions.updateEmployee),
    mergeMap(({ employee }) =>
      this.employeeService.updateEmployee(employee).pipe(
        map(() => EmployeeActions.updateEmployeeSuccess({ employee })),
        catchError((error) =>
          of(EmployeeActions.updateEmployeeFailure({ error }))
        )
      )
    )
  )
);


}
