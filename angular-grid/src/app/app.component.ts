import { Component, ViewChild, OnInit } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid';
// import { CellClickedEvent } from "ag-grid/src/ts/events";
// import { dateRenderer } from "../../../nxad/src/app/shared/utils";
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-grid';
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    {
      headerName: 'Make', field: 'make', checkboxSelection: false,
      cellRenderer: (params) => '<div class="cell1">' + params.value + '</div>'
    },
    { headerName: 'Model', field: 'model', hide: false },
    { headerName: 'Price', field: 'price' },

  ];

  rowData = [
    {
      make: 'Toyota Lorem ipsum dolor Lorem ipsum dolor',
      model: 'Celica',
      price: 35000
      /* cellRendererParams: {
         checkbox: true, // enable checkbox selection
       }*/
      // cellRenderer: 'agGroupCellRenderer',
      // showRowGroup: true,
    },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    rowSelection: 'single', // set active row line
    onRowClicked: this.rowClicked,
    onCellClicked: this.cellClicked,
    suppressRowClickSelection: false, // row click active/inactive
    // onSelectionChanged: this.selectionChanged,
  };

  public currentCellElement: any;

  constructor() {

  }

  ngOnInit() {

  }

  rowClicked(row: any) {
    const currentCell = $(row.source.eBodyRow.firstChild).children().children();
    //currentCell.addClass('active');
    this.currentCellElement = currentCell;

  }

  cellClicked(cell) {
    // console.log('Cell: ', cell);
  }
}

/*

/*cellRendererParams: {
  suppressCount: true, // turn off the row count
    suppressDoubleClickExpand: true, // turn off double click for expand
    checkbox: true, // enable checkbox selection
  // innerRenderer: myInnerRenderer, // provide an inner renderer
  // footerValueGetter: myFooterValueGetter // provide a footer value getter
}
   */

