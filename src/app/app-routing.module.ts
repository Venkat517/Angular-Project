import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' }, // redirect root to /employees
  { path: 'employees', loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule) },
  { path: '**', redirectTo: 'employees' } // wildcard fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
