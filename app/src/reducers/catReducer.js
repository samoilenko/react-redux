import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function catReducer(state = initialState.cats, action) {
    switch (action.type) {
        case types.LOAD_CATS_SUCCESS:
            return action.cats;
        case types.CREATE_CAT_SUCCESS:
        case types.UPDATE_CAT_SUCCESS:
            return [
                ...state.filter(cat => cat.id !== action.cat.id),
                {...action.cat},
            ];
        default:
            return state;
    }
}
