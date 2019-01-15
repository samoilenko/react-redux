import catApi from '../api/catApi';

export function loadCats() {
    return function (dispatch) {
        return catApi.getAllCats().then(cats => {
            dispatch(loadCatsSuccess(cats))
        }).catch(error => {
            throw(error);
        });
    };
}
