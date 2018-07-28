// Nexius Core imports
import { SearchModel, L10nService } from '@nexius/core';
// Internal imports
import { GridModel, NxGridOptions } from './grid-model.class';

/**
 * @export
 * @abstract
 * @class GridController
 * @description
 * This abstract controller helps integration with with ag-Grid by creating a GridModel instance (which has GridOptions)
 * and defining event default handler methods for all ag-Grid events. NOTE that the event handlers must be bound to the
 * appropriate events in the template defining the grid.
 * This controller is intended to be extended by @Components that want to display an ag-Grid instance.
 */
export abstract class GridController {

    public vm: GridModel;
    protected search: SearchModel;
    protected rowCount: number;
    protected totalRows: number;
    protected defaultPageLimit = 1000;

    constructor(l10n: L10nService, gridOptsion?: NxGridOptions) {
        this.vm = new GridModel(l10n, gridOptsion);
        this.search = new SearchModel(1, 0, this.defaultPageLimit);
        this.rowCount = 0;
        this.totalRows = 0;
    }

    public onQuickFilterChanged($event) {
        this.vm.gridOptions.api.setQuickFilter($event.target.value);
    }

    public onReady() {
        // console.log('onReady');
        this.calculateRowCount();
        setTimeout(() => this.vm.gridOptions.api.sizeColumnsToFit(), 0);
    }

    protected onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }

    protected onCellClicked($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    protected onCellValueChanged($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    }

    protected onCellDoubleClicked($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    protected onCellContextMenu($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    protected onCellFocused($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    }

    protected onRowSelected($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        // console.log('onRowSelected: ' + $event.node.data.name);
    }

    protected onSelectionChanged() {
        console.log('selectionChanged');
    }

    protected onBeforeFilterChanged() {
        console.log('beforeFilterChanged');
    }

    protected onAfterFilterChanged() {
        console.log('afterFilterChanged');
    }

    protected onFilterModified() {
        console.log('onFilterModified');
    }

    protected onBeforeSortChanged() {
        console.log('onBeforeSortChanged');
    }

    protected onAfterSortChanged() {
        console.log('onAfterSortChanged');
    }

    protected onVirtualRowRemoved($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    }

    protected onRowClicked($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    }

    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    protected onColumnEvent($event) {
        console.log('onColumnEvent: ' + $event);
    }

    private calculateRowCount() {
        if (this.vm.gridOptions.api && this.vm.gridOptions.rowData) {
            const model = this.vm.gridOptions.api.getModel();
            const totalRows = this.vm.gridOptions.rowData.length;
            const processedRows = model.getRowCount();
            this.rowCount = parseInt(processedRows.toLocaleString(), 10);
            this.totalRows = totalRows;
        }
    }

}
