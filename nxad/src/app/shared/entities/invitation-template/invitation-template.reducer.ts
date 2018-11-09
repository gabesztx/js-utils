// External imports
import { createSelector } from '@ngrx/store';
// Internal imports
import * as invitationsActions from './invitation-template.actions';
import { Course } from '../../../models/course.model';
// TODO: Invites Model

// State interface of the reducer.
export interface State {
    ids: string[];
    entities: { [id: string]: Course };
    selectedEntity: Course;
}
// The initial state for the reducer.
const initial_state: State = {
    ids: [],
    entities: {},
    selectedEntity: null
};
// Reducer function
export function reducer(state = initial_state, action: invitationsActions.InvitationsActions) {
    let entities;
    let course;
    switch (action.type) {
        case invitationsActions.ActionTypes.SET_INVITES_LIST:
            const courses: Course[] = <Course[]>action.payload;
            const ids: string[] = courses.map(c => <string>c.id);
            entities = courses.reduce((cnts: { [id: string]: Course }, cnt: Course) => {
                return Object.assign(cnts, {
                    [cnt.id]: cnt
                });
            }, {});

            return Object.assign({}, state, {
                ids: ids,
                entities: entities
            });
        case invitationsActions.ActionTypes.SELECT_INVITE:
            course = <Course>action.payload;
            return Object.assign({}, state, {
                selectedEntity: course
            });
        default:
            return state;
    }
}

export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getSelecteEntity = (state: State) => state.selectedEntity;
export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});

