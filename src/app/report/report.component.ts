import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { IReport } from '../model/IReport';
import { DataService } from '../services/DataService';
import * as ExcelJS from 'exceljs';
import * as agGrid from 'ag-grid-community';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{
  private gridApi!: agGrid.GridApi;
  private gridColumnApi!: agGrid.ColumnApi;

  constructor(private dataService: DataService) {
  }
  // Each Column Definition results in one Column.
  columnDefs: ColDef[] = [
    { field: 'report_date', headerName: 'Date'},
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
    this.dataService.getReport().subscribe((res) => {
      this.rowData = res
    })
  }
  onGridReady(params: agGrid.GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSubmit(reportForm: NgForm) {
    if (reportForm.valid) {
      const data = reportForm.value
      const response = this.dataService.setReport(data)
      console.log(response);
      reportForm.reset() 
      
    }
  }

  async exportToExcel() {
    const params = {
      allColumns: true,
      fileName: 'exported-data',
    };
    const csvData = await this.gridApi.exportDataAsCsv(params);
   // console.log(csvData);
    
    // const csvLines = csvData.split('\n');
    // const workbook = new ExcelJS.Workbook();
    // const worksheet = workbook.addWorksheet('Sheet 1');
    // csvLines.forEach((line: string) => {
    //   const columns = line.split(',');
    //   worksheet.addRow(columns);
    // });
    // const data = await workbook.xlsx.writeBuffer();
    // const blob = new Blob([data], {
    //   type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    // });
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'exported-data.xlsx';
    // a.click();
    // window.URL.revokeObjectURL(url);
  }
}
