import { ActionReducer, ActionReducerMap, createSelector } from '@ngrx/store';
// Nexius Core imports
import { CoreState, reducers as coreReducers, selectors as coreSelectors } from '@nexius/core';
// Internal imports

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
// import { compose } from '@ngrx/store';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
// import { combineReducers } from '@ngrx/store';

import * as fromCourses from '../shared/entities/course/course.reducer';
import * as fromDrawerMenu from '../shared/components/drawer-menu/drawer-menu.reducer';
import * as fromInviteEmail from '../shared/components/invite-email/invite-email.reducer';
import * as fromSystem from './system.reducer';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

export interface AppState extends CoreState {
    courses: fromCourses.State;
    system: fromSystem.State;
    drawerMenu: fromDrawerMenu.State;
    inviteEmail: fromInviteEmail.State;
}

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
// interface State extends CoreState {
//     courses: fromCourses.State;
// }

// const appState: ActionReducerMap<AppState> = {
//     courses: fromCourses.reducer
// };

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
// export const reducers = mergeWithCoreState<AppState>(appState);
export const reducers: ActionReducerMap<AppState> = {
    system: fromSystem.reducer,
    courses: fromCourses.reducer,
    drawerMenu: fromDrawerMenu.reducer,
    inviteEmail: fromInviteEmail.reducer,
    ...coreReducers
};

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `let` operator. They take an input observable
 * and return a new observable. Here's how you would use this selector:
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.let(getBooksState);
 * 	}
 * }
 * ```
 *
 * Note that this is equivalent to:
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = getBooksState(state$);
 * 	}
 * }
 * ```
 *
 */
export const getCoursesState = (state: AppState) => state.courses;
export const getDrawerMenuState = (state: AppState) => state.drawerMenu;
export const getInviteEmailState = (state: AppState) => state.inviteEmail;
export const getSystemState = (state: AppState) => state.system;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the books state then we pass the state to the book
 * reducer's getBooks selector, finally returning an observable
 * of search results.
 *
 * Share memoizes the selector functions and publishes the result. This means
 * every time you call the selector, you will get back the same result
 * observable. Each subscription to the resultant observable
 * is shared across all subscribers.
**/

// Selectors from the Core library
export const CoreSelectors = coreSelectors;

// Course entity selectors
export const getCourseEntities = createSelector(getCoursesState, fromCourses.getEntities);
export const getCourseIds = createSelector(getCoursesState, fromCourses.getIds);
export const getSelecteCourse = createSelector(getCoursesState, fromCourses.getSelecteEntity);
export const getCourses = createSelector(getCourseEntities, getCourseIds, (entities, ids) => {
    return ids.map(id => {
        return entities[id];
    });
});

// Drawer Menu selectors
export const getDrawerMenuCollapseState = createSelector(getDrawerMenuState, fromDrawerMenu.getSidebarNavCollapseState);
export const getDrawerMenuConfiguration = createSelector(getDrawerMenuState, fromDrawerMenu.getSidebarNavConfiguration);

// System selectors
export const getSystemReadyState = createSelector(getSystemState, fromSystem.getSystemReadyState);

// Invite E-mail selectors
export const getInviteIsActive = createSelector(getInviteEmailState, fromInviteEmail.getInviteIsActive);
export const getInviteState = createSelector(getInviteEmailState, fromInviteEmail.getInviteState);



