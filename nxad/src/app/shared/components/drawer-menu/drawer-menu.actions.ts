// External imports
import { Action } from '@ngrx/store';
import { type } from '../../utils';
// Internal imports
import { DrawerMenuItem } from './drawer-menu-config.interfaces';

export const ActionTypes = {
    UI_TOGGLE_SIDEBAR_NAV: type('UI.ToggleSidebarNav'),
    UI_CONFIGURE_SIDEBAR_NAV: type('UI.ConfigureSidebarNav')
};

export class ToggleSidebarNav implements Action {
    type = ActionTypes.UI_TOGGLE_SIDEBAR_NAV;

    constructor(public payload?: any) { }
}

export class ConfigureSidebarNav implements Action {
    type = ActionTypes.UI_CONFIGURE_SIDEBAR_NAV;

    constructor(public payload: DrawerMenuItem[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = ToggleSidebarNav
  | ConfigureSidebarNav;
