import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home' on app load
  { path: 'home', component: ReportComponent },
  { path: 'expense', component: UserComponent },
  { path: 'task', component: TaskTrackerComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    UserComponent,
    ReportComponent,
    TaskTrackerComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, FormsModule, ReactiveFormsModule, AgGridModule, RouterModule.forRoot(routes), FontAwesomeModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
