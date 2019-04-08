import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.LOGOUT
    }
}

export const checkAuthToken = () => {
  
    return dispatch => {
        if (new Date().getTime() >= localStorage.getItem('expirationDate')) {
            dispatch(logout());
        }
        else {
            dispatch({
                type: actionTypes.AUTH_SUCCESS,
                idToken: localStorage.getItem('token'),
                userId: localStorage.getItem('userId'),
            });
        }

    }

}

export const authSuccess = (idToken, userId, expiresIn) => {
    const expirationDate = new Date().getTime() + expiresIn * 1000;
    console.log(expirationDate);
    localStorage.setItem('token', idToken);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expirationDate', expirationDate);

    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    }
}

// export const signUpSuccess = (idToken, userId, expiresIn) => { //TODO: merge into authSuccess ?
//     localStorage.setItem('token', idToken);
//     localStorage.setItem('userId', userId);
//     localStorage.setItem('expiresIn', expiresIn);

//     return {
//         type: actionTypes.SIGN_UP_SUCCESS,
//         idToken: idToken,
//         userId: userId,
//     }
// }

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const loginInit = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCFreY6jl3D-gU4im3GlEZCupRjQ6rPMnU', { email, password, returnSecureToken: true })
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res.data.idToken, res.data.localId, res.data.expiresIn));
            }).catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
    }
}

export const signupInit = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCFreY6jl3D-gU4im3GlEZCupRjQ6rPMnU', { email: email, password: password, returnSecureToken: true })
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res.data.idToken, res.data.localId, res.data.expiresIn));
            }).catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
    }
}