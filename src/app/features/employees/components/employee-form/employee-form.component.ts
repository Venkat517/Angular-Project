import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../models/employee.model';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  @Output() formSubmitted = new EventEmitter<Employee>();

  employeeForm: FormGroup; // to store entire form structure in store

   constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  submit(): void {
    if (this.employeeForm.valid) {
      this.formSubmitted.emit(this.employeeForm.value);
      this.employeeForm.reset(); // optional: reset after submit
    }
  }
}
