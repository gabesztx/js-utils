import { Component, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid';
import { CellClickedEvent } from "ag-grid/src/ts/events";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-grid';
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    { headerName: 'Make', field: 'make', checkboxSelection: false, width: 200 },
    { headerName: 'Model', field: 'model', hide: false },
    { headerName: 'Price', field: 'price' },

  ];

  rowData = [
    { make: 'Toyota Lorem ipsum dolor Lorem ipsum dolor', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    rowSelection: 'single',
    onRowClicked: this.rowClicked
    // onSelectionChanged: this.selectionChanged,
  };

  // selectionChanged() {}
  rowClicked(rowData) {
    console.log('RowData', rowData);
  }
}
