import { createAction, props } from "@ngrx/store";
import { Employee } from "../models/employee.model";

// DEFINE LOAD ACTIONS : this action triggers when we want to load the employee list from backend
export const loadEmployees = createAction(
    '[Employee] Load Employees'
)

export const addEmployee = createAction(
    '[Employee] Add Employee',
    props<{ employee: Employee }> ()
);

export const deleteEmployee = createAction(
    '[Employee] Delete Employee',
    props<{ id: string | number }> ()
);

export const updateEmployee = createAction(
  '[Employee] Update Employee',
  props<{ employee: Employee }>()
);

// DEFINE LOAD ACTION SUCCESS: this action triggers when API call is successfull, and we pass employee[] to store
export const loadEmployeesSuccess = createAction(
    '[Employee] Load Employees Success',
    props<{ employees: Employee[] } >()
);

// DEFINE LOAD ACTION FAILURE: this action triggers when API call is failure, and we pass error to store
export const loadEmployeesFailure = createAction(
    '[Employee] Load Employees Failure',
    props<{ error: string }>()
);

export const addEmployeeSuccess = createAction(
    '[Employee] Add Employee Success',
    props<{ employee: Employee } >()
)

export const addEmployeeFailure = createAction(
    '[Employee] Add Employee Failure',
    props<{ error: string }>()
)

export const deleteEmployeeSuccess = createAction(
  '[Employee] Delete Employee Success',
  props<{ id: string | number }>()
);

export const deleteEmployeeFailure = createAction(
  '[Employee] Delete Employee Failure',
  props<{ error: any }>()
);

export const updateEmployeeSuccess = createAction(
  '[Employee] Update Employee Success',
  props<{ employee: Employee }>()
);

export const updateEmployeeFailure = createAction(
  '[Employee] Update Employee Failure',
  props<{ error: any }>()
);

