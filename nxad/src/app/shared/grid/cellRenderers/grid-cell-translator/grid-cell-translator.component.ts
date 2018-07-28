// Internal imports
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// Nexius Core imports
import { L10nService } from '@nexius/core';

@Component({
    selector: 'nx-grid-cell-translator',
    templateUrl: './grid-cell-translator.component.html',
    styleUrls: ['./grid-cell-translator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCellTranslatorComponent implements OnInit {

    params: any;

    // private rowData: any;
    // private gridApi: any;

    constructor(private l10n: L10nService) { }

    ngOnInit() { }

    agInit(params: any) {
        this.params = params;
        // this.rowData = Object.assign({}, params.data);
        // this.gridApi = params.api;
    }

}
