import * as SelectCourseResultRowAction from './course-results.action';

export interface State {
    selectedCourseResultData: any;
}

const initial_state: State = {
    selectedCourseResultData: null,
};

export function reducer(state = initial_state, action: SelectCourseResultRowAction.SelectCourseResultAction) {
    switch (action.type) {
        case SelectCourseResultRowAction.ActionTypes.SELECT_ROW:
            return Object.assign({}, state, {
                selectedCourseResultData: action.payload
            });
        default:
            return state;
    }
}

export const getSelectedCourseResult = (state: State) => state.selectedCourseResultData;
