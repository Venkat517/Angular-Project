import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../models/employee.model';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnChanges {
  @Output() formSubmitted = new EventEmitter<Employee>();
  @Input() employee: Employee | null = null;

  employeeForm: FormGroup; // to store entire form structure in store

   constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      console.log('💥 employee input changed:', this.employee);
      if (this.employee) {
        this.employeeForm.patchValue({
          name: this.employee.name,
          position: this.employee.position,
          salary: this.employee.salary
        });
      } else {
        this.employeeForm.reset();
      }
    }
  }

  submit(): void {
    if (this.employeeForm.valid) {
      const data = this.employeeForm.value;

      const payload: Employee = this.employee?.id
        ? { ...data, id: this.employee.id }
        : data;

      this.formSubmitted.emit(payload);
      this.employeeForm.reset();
    }
  }
}
