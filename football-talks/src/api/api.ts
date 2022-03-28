import axios from 'axios';
import { UserType } from '../redux/usersReducer';

export type GetUsersType = {
    currentUser: UserType,
    totalCount: number,
    usersSend: Array<UserType>,  
}

export const UsersApi = {
    getUsers(pageSize: number, currentPage: number, token: string): Promise<GetUsersType> {
        return fetch(`http://localhost:8080/user?id=1&count=${pageSize}&page=${currentPage}`,
            {method: 'GET', headers: { token: token } }).then(response => response.json());
    },

    followUser(token: string, id: number): Promise<string> {
        return fetch(`http://localhost:8080/follow`,
            {method: 'POST', body: JSON.stringify({ id: id }), headers: {'Content-Type': 'application/json', token: token } }
            ).then(response => response.json())
    },

    unfollowUser(token: string, id: number): Promise<string> {
        return fetch(`http://localhost:8080/follow`, {method: 'DELETE', headers: { token: token, id: id.toString() } },
        ).then(response => response.json())
    },
}

export const ProfileApi = {
    getProfile(userId: string, token: string): Promise<UserType> {
        return fetch(`http://localhost:8080/user/userpage?id=${userId}`, {method: 'GET', headers: { token: token } }).then(
            response => response.json());
    },
    
    changeStatus(token: string, status: string): Promise<string> {
        return fetch(`http://localhost:8080/status`, {method: 'PUT', body: JSON.stringify({status: status}), headers: {
            'Content-Type': 'application/json', token: token } }).then(response => response.text());
    },
}

export const EnterApi = {
    enter(login: string, pass: string): Promise<string> {
        return fetch(`http://localhost:8080/auth`, {method:'GET', headers: { login: login, password: pass } }
        ).then(response => response.json())
        }
}

export const AddPostApi = {
    addPostToServer(token: string, title: string, text: string): Promise<string> {
        return fetch(`http://localhost:8080/addpost`, {method: 'POST', 
        body: JSON.stringify({title: title, text: text, likes: 0, dislikes: 0 }), headers: {
        'Content-Type': 'application/json', token: token } }).then(response => response.json())
    },
}