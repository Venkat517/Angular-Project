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
    employees, // overwrite employee list with API response
    loading: false,
    }
  }),

  //load failure
  on(EmployeeActions.loadEmployeesFailure, (state, {error}) =>({
    ...state,
    error,
    loading: false
  })),

  on(EmployeeActions.addEmployeeSuccess, (state, {employee}) => ({
    ...state,
    employees: [...state.employees, employee],
    loading: false
  })),

  on(EmployeeActions.deleteEmployeeSuccess, (state, { id }) => ({
  ...state,
  employees: state.employees.filter(emp => emp.id !== id)
})),

on(EmployeeActions.updateEmployeeSuccess, (state, { employee }) => ({
  ...state,
  employees: state.employees.map(emp =>
    emp.id === employee.id ? { ...emp, ...employee } : emp
  )
}))


)
