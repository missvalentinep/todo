import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../utils/updateObject';

const initialState = {
    userId: null,
    token: null,
    loading: false,
    redirectUrl: '/',
    error: null,
};

const authStart = (state, action) => {
    console.log("start");
    return updateObject(state, { loading: true });
}

const authSuccess = (state, action) => {
    console.log("success");
    return updateObject(state, { loading: false, redirectUrl: '/', error: null, token: action.idToken, userId: action.userId });
}

// const loginSuccess = (state, action) => {
//     console.log("success");
//     return updateObject(state, { loading: false, redirectUrl: '/', error: null, token: action.idToken, userId: action.userId });
// }

const authFail = (state, action) => {
    console.log("fail");
    return updateObject(state, { loading: false, error: action.error });
}

const logout = (state, action) => {
    return updateObject(state, {
        userId: null,
        token: null,
        loading: false,
        redirectUrl: '/',
        error: null,
    });
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
       
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.LOGOUT: return logout(state, action);
        default: return state;
    }
}

export default auth;