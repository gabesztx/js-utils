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

import * as fromCourseResult from '../views/courses/course-detail/course-results/course-results.reducer';
import * as fromDropDown from '../shared/components/selectdropdown/selectdropDown.reducer';
import * as fromInviteEmail from '../views/courses/course-detail/invite-email/invite-email.reducer';
import * as fromInvitations from '../shared/entities/invitation-template/invitation-template.reducer';
import * as fromDrawerMenu from '../shared/components/drawer-menu/drawer-menu.reducer';
import * as fromUserInvitations from '../shared/entities/user-invitation/user-invitation.reducer';
import * as fromSystem from './system.reducer';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

export interface AppState extends CoreState {
    courseResult: fromCourseResult.State;
    dropDown: fromDropDown.State;
    invitations: fromInvitations.State;
    system: fromSystem.State;
    drawerMenu: fromDrawerMenu.State;
    inviteEmail: fromInviteEmail.State;
    userInvitations: fromUserInvitations.State;
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
    courseResult: fromCourseResult.reducer,
    dropDown: fromDropDown.reducer,
    invitations: fromInvitations.reducer,
    // courses: fromCourses.reducer,
    drawerMenu: fromDrawerMenu.reducer,
    inviteEmail: fromInviteEmail.reducer,
    userInvitations: fromUserInvitations.reducer,
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
// const getCoursesState = (state: AppState) => state.courses;
const getDropDownState = (state: AppState) => state.dropDown;
const getSelectedCourseResultState = (state: AppState) => state.courseResult;
const getInvitationsState = (state: AppState) => state.invitations;
const getUserInvitationsState = (state: AppState) => state.userInvitations;
const getDrawerMenuState = (state: AppState) => state.drawerMenu;
const getInviteEmailState = (state: AppState) => state.inviteEmail;
const getSystemState = (state: AppState) => state.system;

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
/*export const getCourseEntities = createSelector(getCoursesState, fromCourses.getEntities);
export const getCourseIds = createSelector(getCoursesState, fromCourses.getIds);
export const getSelectedCourse = createSelector(getCoursesState, fromCourses.getSelecteEntity);
export const getCourses = createSelector(getCourseEntities, getCourseIds, (entities, ids) => {
    return ids.map(id => {
        return entities[id];
    });
});*/

// Course result selector
export const getCourseResult = createSelector(getSelectedCourseResultState, fromCourseResult.getSelectedCourseResult);

// Drop Down selectors
export const getdropDownAddState = createSelector(getDropDownState, fromDropDown.getDropDownAdd);
export const getdropDownRemoveState = createSelector(getDropDownState, fromDropDown.getDropDownRemove);
export const getdropDownState = createSelector(getDropDownState, fromDropDown.getDropDownState);


// Drawer Menu selectors
export const getDrawerMenuCollapseState = createSelector(getDrawerMenuState, fromDrawerMenu.getSidebarNavCollapseState);
export const getDrawerMenuConfiguration = createSelector(getDrawerMenuState, fromDrawerMenu.getSidebarNavConfiguration);

// System selectors
export const getSystemReadyState = createSelector(getSystemState, fromSystem.getSystemReadyState);

// Invite E-mail selectors
export const getInviteEmail = createSelector(getInviteEmailState, fromInviteEmail.getInviteEmail);
export const getInviteFile = createSelector(getInviteEmailState, fromInviteEmail.getInviteFile);
export const getInviteIsActive = createSelector(getInviteEmailState, fromInviteEmail.getInviteIsActive);
export const getInviteState = createSelector(getInviteEmailState, fromInviteEmail.getInviteState);
export const getInviteInvitationState = createSelector(getInviteEmailState, fromInviteEmail.getInviteInvitation);

// Invitations entity selectors
export const getInvitationEntities = createSelector(getInvitationsState, fromInvitations.getEntities);
export const getInvitationIds = createSelector(getInvitationsState, fromInvitations.getIds);
export const getSelectedInvitation = createSelector(getInvitationsState, fromInvitations.getSelecteEntity);
export const getInvitations = createSelector(getInvitationEntities, getInvitationIds, (entities, ids) => {
    return ids.map(id => {
        return entities[id];
    });
});

// User Invitation entity selectors
export const getUserInvitationEntities = createSelector(getUserInvitationsState, fromUserInvitations.getUserInvitationEntities);
export const getUserInvitationIds = createSelector(getUserInvitationsState, fromUserInvitations.getUserInvitationIds);
export const getSelectedUserInvitation = createSelector(getUserInvitationsState, fromUserInvitations.getSelecteUserInvitation);
export const getUserInvitations = createSelector(getUserInvitationEntities, getUserInvitationIds, (entities, ids) => {
    return ids.map(id => {
        return entities[id];
    });
});
