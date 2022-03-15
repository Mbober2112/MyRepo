import { EnterApi } from "../api/api";

const LOGIN = 'auth/LOGIN';
const CHANGE_AUTH_DATA = 'auth/CHANGE-AUTH-DATA';
const SET_USER_TOKEN = 'auth/SET-USER-TOKEN';

type InitialStateType = {
    login: string,
    pass: string,
    token: string,
}

let initialState: InitialStateType = {
    login: '',
    pass: '',
    token: '',
}

const AuthReducer = (state = initialState, action: any): InitialStateType => {
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

type OnLoginActionType = {
    type: typeof LOGIN,
}

type ChangeAuthDataActionType = {
    type: typeof CHANGE_AUTH_DATA,
    login: string,
    pass: string,
}

type setUserTokenActionType = {
    type: typeof SET_USER_TOKEN,
    token: string,
}

export const onLogin = (): OnLoginActionType => ({ type: LOGIN });
export const changeAuthData = (login: string, pass: string): ChangeAuthDataActionType => ({ type: CHANGE_AUTH_DATA, login: login, pass: pass });
export const setUserToken = (token: string): setUserTokenActionType => ({ type: SET_USER_TOKEN, token: token });

export const loginTC = (login: string, pass: string) => {
    return async (dispatch: any) => {
        let token = await EnterApi.enter(login, pass);   
            dispatch(setUserToken(token));
    }
}

export default AuthReducer;