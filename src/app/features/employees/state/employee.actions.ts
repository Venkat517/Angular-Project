import { createAction, props } from "@ngrx/store";
import { Employee } from "../models/employee.model";

// DEFINE LOAD ACTIONS : this action triggers when we want to load the employee list from backend
export const loadEmployees = createAction(
    '[Employee] Load Employees'
)

// DEFINE LOAD ACTION SUCCESS: this action triggers when API call is successfull, and we pass employee[] to store
export const loadEmployeesSuccess = createAction(
    '[Employee] Load Employees Success',
    props<{ employee: Employee[] } >()
);

// DEFINE LOAD ACTION FAILURE: this action triggers when API call is failure, and we pass error to store
export const loadEmployeesFailure = createAction(
    '[Employee] Load Employees Failure',
    props<{ error: string }>()
);

