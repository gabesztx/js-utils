import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

/**
 * @export
 * @abstract
 * @class BaseSmartComponent
 * @implements {OnDestroy}
 * @description
 * Smart components are components that have store subscriptions and interact with the store. BaseSmartComponent defines a subscriptions
 * map for components to use and ensures that all subscriptions are unsubscibed once the Component instance is destroyed.
 * For more details see:
 * https://angular.io/guide/lifecycle-hooks
 * https://angular.io/api/core/OnDestroy
 */
export abstract class BaseSmartComponent implements OnDestroy {

    /**
     * @property subscriptions
     * @description
     * A map of subscriptions used by the Component. OnDestroys unsubscribes all enlisted subscriptions.
     * @private
     * @memberof SidebarNavComponent
     */
    protected subscriptions: { [s: string]: Subscription };

    ngOnDestroy() {
        for (const sub in this.subscriptions) {
            if (this.subscriptions[sub] instanceof Subscription) {
                this.subscriptions[sub].unsubscribe();
            }
        }
    }

}
