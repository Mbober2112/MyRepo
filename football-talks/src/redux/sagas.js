import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { AddPostApi, EnterApi, ProfileApi, UsersApi} from "../api/api";
import { setUserToken, NEW_TYPE, GET_TOKEN } from "./authReducer";
import { addPostToProfilePage, ADD_POST, setUserProfile, setUserProfileStatus, SET_PROFILE, SET_STATUS } from "./profileReducer";
import { follow, GET_FOLLOW, GET_UNFOLLOW, GET_USERS, setFriend, setTotalUsersCount, setUsers, unfollow } from "./usersReducer";

// --authReducer sagas

function* authWorker (props) {
    const data = yield call(() => EnterApi.enter(props.login, props.pass));

    yield put(setUserToken(data.token));
}

export function* authWatcher() {
    yield takeEvery(GET_TOKEN, authWorker);
}

// --usersReducer sagas
// getUSers

function* getUsersWorker (props) {
    const data = yield call(() => UsersApi.getUsers(props.pageSize, props.currentPage, props.token));

    yield put(setUsers(data.usersSend));
    yield put(setTotalUsersCount(data.totalCount));
    yield put(setFriend(data.currentUser.friends));
}

export function* getUsersWatcher() {
    yield takeEvery(GET_USERS, getUsersWorker);
}

//follow

function* followWorker (props) {
    const data = yield call(() => UsersApi.followUser(props.token, props.id));
    if (data.result === 'ok'){
        yield put(follow(props.id));
    }
    
}

export function* followWatcher() {
    yield takeEvery(GET_FOLLOW, followWorker);
}

//unfollow

function* unfollowWorker (props) {
    const data = yield call(() => UsersApi.unfollowUser(props.token, props.id));
    if (data.result === 'ok'){
        yield put(unfollow(props.id));
    }
}

export function* unfollowWatcher() {
    yield takeEvery(GET_UNFOLLOW, unfollowWorker);
}

// --profileReducer sagas
// setProfile
function* setProfileWorker (props) {
    const data = yield call(() => ProfileApi.getProfile(props.userId, props.token));
    
    yield put(setUserProfile(data));    
}

export function* setProfileWatcher() {
    yield takeEvery(SET_PROFILE, setProfileWorker);
}

// setStatus
function* setStatusWorker (props) {
    const data = yield call(() => ProfileApi.changeStatus(props.token, props.status));
    
    yield put(setUserProfileStatus(data));    
}

export function* setStatusWatcher() {
    yield takeEvery(SET_STATUS, setStatusWorker);
}

// addPost
function* addPostWorker (props) {
    const data = yield call(() => AddPostApi.addPostToServer(props.token, props.title, props.text));
    if (data.result === 'ok') {
        yield put(addPostToProfilePage(props.title, props.text));
    }
        
}

export function* addPostWatcher() {
    yield takeEvery(ADD_POST, addPostWorker);
}
