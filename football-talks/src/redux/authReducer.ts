import { ThunkAction } from "redux-thunk";
import { EnterApi } from "../api/api";
import { AppStateType } from "./reduxStore";

const LOGIN = 'auth/LOGIN';
const CHANGE_AUTH_DATA = 'auth/CHANGE-AUTH-DATA';
const SET_USER_TOKEN = 'auth/SET-USER-TOKEN';
export const GET_TOKEN = 'auth/GET-TOKEN';

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

const AuthReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = OnLoginActionType | ChangeAuthDataActionType | setUserTokenActionType;

export const onLogin = (): OnLoginActionType => ({ type: LOGIN });
export const changeAuthData = (login: string, pass: string): ChangeAuthDataActionType => ({ type: CHANGE_AUTH_DATA, login: login, pass: pass });
export const setUserToken = (token: string): setUserTokenActionType => ({ type: SET_USER_TOKEN, token: token });

export const loginTC = (login: string, pass: string) => ({type: GET_TOKEN, login: login, pass: pass});

export default AuthReducer;