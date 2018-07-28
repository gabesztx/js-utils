// External imports
import { GridOptions, ColDef, ColGroupDef } from 'ag-grid';
// Nexius Core imports
import { L10nService } from '@nexius/core';
// Internal imports
import { ViewModel, IViewModel } from '../view-model.class';
import { UserLevel } from '../../models/user.model';

export interface NxColDef extends ColDef {
    action?: any;
    actionParams?: Array<any>;
    actionContext?: any;
    label?: string;
    lockable?: boolean;
    dataFieldName?: string;
    requiredUserLevel?: UserLevel;
    acceptHigherLevel?: boolean;
    lock?: (rowData: any) => boolean;
    iconClass?: string;
    tooltipPosition?: string;
}

export interface NxGridOptions extends GridOptions {
    columnDefs: Array<NxColDef | ColGroupDef>;
}

export interface IGridModel extends IViewModel {
    gridOptions: NxGridOptions;
    setGridOptions(gridOptions: NxGridOptions): void;
}

/**
 * @export
 * @class GridModel
 * @extends {ViewModel}
 * @implements {IGridModel}
 */
export class GridModel extends ViewModel implements IGridModel {

    gridOptions: NxGridOptions;
    protected defaultGridOptions: NxGridOptions = {
        enableSorting: true,
        enableFilter: true,
        enableColResize: true,
        suppressMovableColumns: true,
        suppressMenuHide: true,
        suppressRowClickSelection: true,
        suppressCellSelection: true,
        autoSizePadding: 20,
        headerHeight: 32,
        rowHeight: 32,
        animateRows: true,
        columnDefs: [],
        rowData: [],
        rowBuffer: 500,
        pagination: true,
        paginationAutoPageSize: true
    };

    constructor (l10n: L10nService, gridOptions?: NxGridOptions) {
        super(l10n);

        if (gridOptions) {
            this.setGridOptions(gridOptions);
        }
    }

    setGridOptions(gridOptions: NxGridOptions): void {
        // Set gridOptions property to parameter's value.
        this.gridOptions = this.recursiveTranslateKeys(Object.assign({}, this.defaultGridOptions, gridOptions), 'headerName');
    }
}
