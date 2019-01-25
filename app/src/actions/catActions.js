import catApi from '../api/catApi';
import { LOAD_CATS_SUCCESS, UPDATE_CAT_SUCCESS, CREATE_CAT_SUCCESS } from './actionTypes'

export function loadCats() {
    return function (dispatch) {
        return catApi.getAllCats().then(cats => {
            dispatch(loadCatsSuccess(cats))
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadCatsSuccess(cats) {
    return {type: LOAD_CATS_SUCCESS, cats};
}

export function updateCatSuccess(cat) {
    return {
        type: UPDATE_CAT_SUCCESS,
        cat,
    }
}

export function createCatSuccess(cat) {
    return {
        type: CREATE_CAT_SUCCESS,
        cat,
    }
}

export function updateCat(cat) {
    return function (dispatch) {
        return catApi.updateCat(cat)
            .then(responseCat => {
                dispatch(updateCatSuccess(responseCat));
            })
            .catch(error => {
                throw(error);
            });
    }
}

export function createCat(cat) {
    return function (dispatch) {
        return catApi.createCat(cat)
            .then(responseCat => {
                dispatch(createCatSuccess(responseCat));
            })
            .catch(error => {
                throw(error);
            });
    }
}
