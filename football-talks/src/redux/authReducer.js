import { EnterApi } from "../api/api";

const LOGIN = 'LOGIN';
const CHANGE_AUTH_DATA = 'CHANGE-AUTH-DATA';
const SET_USER_TOKEN = 'SET-USER-TOKEN';

let initialState = {
    login: '',
    pass: '',
    token: '',
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: state.login,
                pass: state.pass,
            }

        case CHANGE_AUTH_DATA:
            return {
                ...state,
                login: action.login,
                pass: action.pass,
            }

        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.token,
            }

        default:
            return state;
    }
}

export const onLogin = () => ({ type: LOGIN });
export const changeAuthData = (login, pass) => ({ type: CHANGE_AUTH_DATA, login: login, pass: pass });
export const setUserToken = (token) => ({ type: SET_USER_TOKEN, token: token });

export const loginTC = (login, pass) => {
    return async (dispatch) => {
        let token = await EnterApi.enter(login, pass);   
            dispatch(setUserToken(token));
    }
}

export default AuthReducer;