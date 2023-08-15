import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DataService } from '../services/DataService';

interface IReport {
  date: Date
  room_no: number
  room_price: number
  food_amount: number
  misc_amount: number
  comment: string
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  constructor(private dataService: DataService) {
  }
  // Each Column Definition results in one Column.
  columnDefs: ColDef[] = [
    { field: 'date', headerName: 'Date'},
    { field: 'room_no', headerName: 'Room No'},
    { field: 'room_price', headerName: 'Room Price'},
    { field: 'food_amount', headerName: 'Food Amount'},
    { field: 'misc_amount', headerName: 'Misc Amount'},
    { field: 'comment', headerName: 'Comment'}
  ];

  // DefaultColDef sets props common to all Columns
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    flex: 1
  };
  public rowData: IReport[] | null = [];

  heading: string = "Daily Status Report"
  currentDate: Date = new Date()
  ngOnInit() {
    localStorage.setItem('report', JSON.stringify([]))
  }
  onGridReady(params: GridReadyEvent) {
    this.rowData = []
  }

  onSubmit(reportForm: NgForm) {
    if (reportForm.valid) {
      //const store = localStorage.getItem('report') || ""
      //const jsonData = JSON.parse(store)
      const data = reportForm.value
      //this.rowData = data
      //localStorage.setItem('report', JSON.stringify(data))
      // reportForm.reset() 
      const response = this.dataService.setReport(data)
      console.log(response);
      
    }
  }
}
