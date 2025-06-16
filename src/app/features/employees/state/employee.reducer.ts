import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employee.actions';
import { initialEmployeeState } from "./employee.state";

export const employeeReducer = createReducer(
    initialEmployeeState, //default State

  //load Employees
  on(EmployeeActions.loadEmployees, (state) =>({
    ...state,
    loading: true,
    error: null
  })),

  //load Success
  on(EmployeeActions.loadEmployeesSuccess, (state, {employees}) =>{
    console.log('Reducer: updating state with employees', employees);
    return {
    ...state,
    employees,
    loading: false,
    }
  }),

  //load failure
  on(EmployeeActions.loadEmployeesFailure, (state, {error}) =>({
    ...state,
    error,
    loading: false
  }))
)
