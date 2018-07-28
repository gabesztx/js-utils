// External imports
// Internal imports
import * as drawerMenuActions from './drawer-menu.actions';
import { DrawerMenuItem } from './drawer-menu-config.interfaces';

// State interface of the reducer.
export interface State {
    sideMenuCollapsed: boolean;
    sidebarNavConfig: DrawerMenuItem[];
}
// The initial state for the reducer.
const initial_state: State = {
    sideMenuCollapsed: true,
    sidebarNavConfig: <DrawerMenuItem[]>[]
};
// Reducer function
export function reducer(state = initial_state, action: drawerMenuActions.Actions) {
    switch (action.type) {
        case drawerMenuActions.ActionTypes.UI_TOGGLE_SIDEBAR_NAV:
            return Object.assign({}, state, {
                sideMenuCollapsed: !state.sideMenuCollapsed
            });
        case drawerMenuActions.ActionTypes.UI_CONFIGURE_SIDEBAR_NAV:
            const navConf = <DrawerMenuItem[]>action.payload;

            return Object.assign({}, state, {
                sidebarNavConfig: [].concat(navConf)
            });
        default:
            return state;
    }
}

export const getSidebarNavCollapseState = (state: State) => state.sideMenuCollapsed;
export const getSidebarNavConfiguration = (state: State) => state.sidebarNavConfig;
