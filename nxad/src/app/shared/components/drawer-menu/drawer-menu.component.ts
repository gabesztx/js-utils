// External imports
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// Internal imports
import * as fromRoot from '../../../reducers/index.reducer';
import * as drawerMenuActions from './drawer-menu.actions';
import { BaseSmartComponent } from '../base-smart-component.class';
import { DrawerMenuItem } from './drawer-menu-config.interfaces';

@Component({
    selector: 'nx-drawer-menu',
    templateUrl: './drawer-menu.component.html',
    styleUrls: ['./drawer-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerMenuComponent extends BaseSmartComponent implements OnInit, OnDestroy {

    /**
     * @property sidebarNavComfiguration$
     * @description
     * Observable array of sidebar navigation item configuration objects. Configuration items come from tu Store's UI state property
     * 'sidebarNavConfig', subscribed to with the selector 'getSidebarNavConfiguration' in root.
     * @public
     * @type {Observable<DrawerMenuItem[]>}
     * @memberof SidebarNavComponent
    **/
    public sidebarNavComfiguration$: Observable<DrawerMenuItem[]>;

    /**
     * @property sidenavCmp
     * @description
     * Reference to the <mat-sidenav> component. For more on MatSidenav refer to https://material.angular.io/components/sidenav/api.
     * The reference is acquired with @ViewChild. To learn more, see
     * https://angular.io/api/core/ViewChild
     * and
     * https://angular.io/guide/component-interaction#parent-calls-an-viewchild
     * @private
     * @type {MatSidenav}
     * @memberof SidebarNavComponent
    **/
    @ViewChild('sidenav') private sidenavCmp: MatSidenav;

    /**
     * @property isSidenavCollapsed$
     * @description
     * Observable property that describes the collapse state of the global sidebar navigation menu in.
     * Obtained with the getDrawerMenuCollapseState selector in root (index reducer).
     * @private
     * @type {Observable<boolean>}
     * @memberof SidebarNavComponent
    **/
    private isSidenavCollapsed$: Observable<boolean>;

    constructor(private store: Store<fromRoot.AppState>) {
        super();
        this.subscriptions = {
            isSidenavCollapsed: null
        };
    }

    ngOnInit(): void {
        // Store selections.
        this.isSidenavCollapsed$ = this.store.select(fromRoot.getDrawerMenuCollapseState);
        this.sidebarNavComfiguration$ = this.store.select(fromRoot.getDrawerMenuConfiguration);
        // Set subscriptions. The map is defined in parent class.
        this.subscriptions.isSidenavCollapsed = this.isSidenavCollapsed$.subscribe(this.onSideNavCollapseStateChange.bind(this));
    }

    ngOnDestroy(): void {
        // Call parent deconstruction method first!
        super.ngOnDestroy();
        // Do component-specific cleanup.
        this.isSidenavCollapsed$ = null;
    }

    onClickToggleSidenav(): void {
        this.store.dispatch(new drawerMenuActions.ToggleSidebarNav(null));
    }

    private onSideNavCollapseStateChange(collapse: boolean): void {
        if (collapse === this.sidenavCmp.opened) {
            this.sidenavCmp.toggle();
        }
    }

}
