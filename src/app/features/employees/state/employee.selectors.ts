import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "./employee.state";

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.employees
);

export const selectEmployeeLoading = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.loading
);

export const selectEmployeeError = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.error
);
