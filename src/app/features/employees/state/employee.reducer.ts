import { createReducer, on } from '@ngrx/store';
import { loadEmployees, loadEmployeesFailure, loadEmployeesSuccess } from './employee.actions';
import { initialEmployeeState } from "./employee.state";

export const employeeReducer = createReducer(
    initialEmployeeState, //default State

  //load Employees
  on(loadEmployees, (state) =>({
    ...state,
    loading: true,
    error: null
  })),

  //load Success
  on(loadEmployeesSuccess, (state, {employee}) =>({
    ...state,
    employee,
    loading: false,
    Error
  })),

  //load failure
  on(loadEmployeesFailure, (state, {error}) =>({
    ...state,
    error,
    loading: false
  }))
)
