import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SearchModel, FilterModel } from '@nexius/core';

@Component({
    selector: 'nx-selectdropdown',
    templateUrl: './selectdropdown.component.html',
    styleUrls: ['./selectdropdown.component.scss']
})

export class SelectdropdownComponent implements OnInit, OnChanges {
    @Input() searchModel: SearchModel;
    @Input() filterConfig: any;
    private filter: FilterModel;
    private isFilterApllied: boolean;
    selected: any;

    constructor() {}

    ngOnChanges() {
        if (this.filterConfig) {
            const fitlerName = this.filterConfig['filterName'];
            const initialFilter = this.filterConfig.hasOwnProperty('initialFilter');
            const defaultFilter = new FilterModel(fitlerName, null);
            this.filter = initialFilter ? this.filterConfig['initialFilter'] : defaultFilter;
            this.selected = initialFilter ? this.filter.value : 0;
            this.isFilterApllied = !!initialFilter;
        }
    }

    ngOnInit() {}

    /* dropDown select trigger */
    selectionChange(event: any) {
        this.filter.value = event.value;
        this.triggerChangeList();
    }

    /* trigger search list */
    triggerChangeList() {
        if (!this.isFilterApllied) {
            this.isFilterApllied = true;
            this.searchModel.addFilter(this.filter);
        } else if (this.filter.value === 0) {
            this.isFilterApllied = false;
            this.searchModel.removeFilter(this.filter);
        } else {
            this.searchModel.updateFilter(this.filter);
        }
    }
}
