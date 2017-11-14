import { URLSearchParams } from '@angular/http';

import * as Base from './base/base.model';
import { UUID } from 'angular2-uuid';
import { enumerable, configurable, writable } from '../core/util';

export interface Page {
    page: number;
    start: number;
    limit: number;
}

export interface Filter {
    id?: string;
    property: string;
    value: string | number | boolean;
    operator?: string;
}

export interface Search extends Page {
    id?: string;
    sort?: string;
    dir?: string;
    filter?: Array<Filter>;
}

export class FilterModel implements Filter {

    @configurable(true)
    @writable(true)
    @enumerable(false)
    public id: string;
    public property: string;
    public value: string | number | boolean;
    public operator: string;

    constructor(propertyName: string, filterValue: string | number | boolean, operatorName?: string) {

        this.id = UUID.UUID();
        this.property = propertyName;
        this.value = filterValue;

        if (typeof operatorName === 'string' && operatorName.length) {
            this.operator = operatorName;
        } else {
            switch (typeof this.value) {
                case 'string':
                    this.operator = 'like';
                    break;
                default:
                    this.operator = 'eq';
            }
        }
    }

    serialize(): any {
        let serializedParams: any;

        try {
            serializedParams = JSON.parse(JSON.stringify(this));
            delete serializedParams.id;
            return serializedParams;
        } catch (e) {
            console.error('SearchModel.serialize: an error occured!', e);
        }
    }

}

export class SearchModel implements Search {

    @configurable(true)
    @writable(true)
    @enumerable(false)
    public id: string;
    public page: number;
    public start: number;
    public limit: number;
    public sort: string;
    public dir: string;
    public filter: Array<FilterModel>; // NOTE This is in singular becuse the API requires it so.

    // TODO Implement sorting!
    constructor(page = 1, start = 0, limit = 15, filters?: Array<FilterModel | Filter>) {

        this.id = UUID.UUID();
        this.page = page;
        this.start = start;
        this.limit = limit;
        this.filter = [];

        if (Array.isArray(filters) && filters.length) {
            filters.forEach((f, i) => {
                this.addFilter(f);
            });
        }
    }

    addFilter(filter: FilterModel | Filter): void {
        let _filter;

        if (!(filter instanceof FilterModel) && typeof filter === 'object') {
            _filter = new FilterModel(filter.property, filter.value, filter.operator);
        } else {
            _filter = filter;
        }

        this.filter.push(_filter);
    }

    removeFilter(filter: FilterModel | string): void {
        let filterId: string;

        if (typeof filter === 'string') {
            filterId = filter;
        } else {
            filterId = filter.id;
        }

        this.filter.splice(this.filter.findIndex(f => f.id === filterId, 1));
    }

    clearFilter(): void {
        this.filter = [];
    }

    nextPage(): void {
        this.page += 1;
    }

    previousPage(): void {
        if (this.page > 1) {
            this.page -= 1;
        }
    }

    setLimit(limit: number): void {
        this.limit = limit;
    }

    getURLSearchParameters(): URLSearchParams {
        const params = new URLSearchParams();
        const objParams = this.serialize();

        for (const key in objParams) {
            if (objParams.hasOwnProperty(key)) {
                const val = objParams[key];
                params.set(key, val);
            }
        }

        return params;
    }

    private serialize(): any {
        let serializedParams: any;

        try {
            serializedParams = JSON.parse(JSON.stringify(this));
            serializedParams.filter = [];

            this.filter.forEach(f => {
                serializedParams.filter.push(f.serialize());
            });

            serializedParams.filter = JSON.stringify(serializedParams.filter);

            delete serializedParams.id;
            return serializedParams;
        } catch (e) {
            console.error('SearchModel.serialize: an error occured!', e);
        }
    }

}
