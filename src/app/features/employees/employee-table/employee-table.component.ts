import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
    standalone: true, // ✅ STANDALONE!
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  @Input() employees: Employee[] = [];

  @Output() delete = new EventEmitter<number>();

  deletingIds: number[] = [];
    onDelete(id: number): void {
      console.log('delete id button', id)
    this.delete.emit(id);
  }
}
