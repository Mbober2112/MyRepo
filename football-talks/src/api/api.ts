import axios from 'axios';
import { UserType } from '../redux/usersReducer';

type GetUsersType = {
    currentUser: UserType,
    totalCount: number,
    usersSend: Array<UserType>,  
}

type ResultType = {
    result: string,
}

export const UsersApi = {
    getUsers(pageSize: number, currentPage: number, token: string) {
        return axios.get<GetUsersType>(`http://localhost:8080/user?id=1&count=${pageSize}&page=${currentPage}`,
            { headers: { token: token } }).then(response => {
                return response.data;
            });
    },

    // getUsers2(pageSize: number, pageNumber: number, token: string) {
    //     return axios.get(`http://localhost:8080/user?id=1&count=${pageSize}&page=${pageNumber}`,
    //         { headers: { token: token } }).then(response => {
    //             return response.data;
    //         });
    // },

    followUser(token: string, id: number) {
        return axios.post<ResultType>(`http://localhost:8080/follow`, { id: id },
            { headers: { token: token } }).then(response => {
                return response.data.result;
            })
    },

    unfollowUser(token: string, id: number) {
        return axios.delete<ResultType>(`http://localhost:8080/follow`, { headers: { token: token, id: id.toString() } },
        ).then(response => {
            return response.data.result;
        });
    },
}

export const ProfileApi = {
    getProfile(userId: number, token: string) {
        return axios.get<UserType>(`http://localhost:8080/user/userpage?id=${userId}`, { headers: { token: token } }).then(response => {
            return response.data;
        });
    },
    changeStatus(token: string, status: string) {
        
        return axios.put<string>(`http://localhost:8080/status`, {status: status}, { headers: { token: token } }).then(response => {
            return response.data;
            // console.log(response.data);
        });
    },
}

export const EnterApi = {
    enter(login: string, pass: string) {
        return axios.get<UserType>(`http://localhost:8080/auth`, { headers: { login: login, password: pass } }).then(response => {
            return response.data.token;
        })
    }
}

export const AddPostApi = {
    addPostToServer(token: string, title: string, text: string) {
        return axios.post<ResultType>(`http://localhost:8080/addpost`, {title: title, text: text, likes: 0, dislikes: 0 },
            { headers: { token: token } }).then(response => {
                return response.data.result;
            })
    },
}