import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './features/employees/components/employee-table/employee-table.component';
import { EmployeeFormComponent } from './features/employees/components/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
