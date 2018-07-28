// Extenral imports
import { UUID } from 'angular2-uuid';
// Internal imports
import { L10nService } from '@nexius/core';

export interface IViewModel {
    id: string;
    data?: any;
}

export class ViewModel implements IViewModel {

    id: string;
    protected l10n: L10nService;

    constructor (l10n: L10nService) {
        this.id = UUID.UUID();
        this.l10n = l10n;
    }

    protected recursiveTranslateKeys(obj: any, keys: string | Array<string>) {
        let internalKeys: Array<string>;
        // Make a keys array internally.
        if (typeof keys === 'string') {
            internalKeys = [keys];
        } else {
            internalKeys = keys.slice(0);
        }
        // Take care of arrays, like columnDef's in GridOptions.
        if (obj instanceof Array) {
            obj.forEach((val, i) => {
                if ((val instanceof Array) || (typeof val === 'object' && val !== null)) {
                    obj[i] = this.recursiveTranslateKeys(obj[i], internalKeys);
                }
            });
        // If current node is an object, iterate keys.
        } else if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach((key) => {
                let label: string;

                if (internalKeys.some(k => k === key)) {
                    label = obj[key];

                    if (typeof label === 'string' && label.length) {
                        obj[key] = this.l10n.translate(label);
                    }
                } else if (typeof obj[key] === 'object') {
                    obj[key] = this.recursiveTranslateKeys(obj[key], internalKeys);
                }
            });
        }

        return obj;
    }

}
