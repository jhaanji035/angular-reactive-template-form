import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    UserComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, FormsModule, ReactiveFormsModule, AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
