import * as axios from 'axios';

export const UsersApi = {
    getUsers(pageSize, currentPage, token) {
        return axios.get(`http://localhost:8080/user?id=1&count=${pageSize}&page=${currentPage}`,
            { headers: { token: token } }).then(response => {
                return response.data;
            });
    },

    getUsers2(pageSize, pageNumber, token) {
        return axios.get(`http://localhost:8080/user?id=1&count=${pageSize}&page=${pageNumber}`,
            { headers: { token: token } }).then(response => {
                return response.data;
            });
    },

    followUser(token, id) {
        return axios.post(`http://localhost:8080/follow`, { id: id },
            { headers: { token: token } }).then(response => {
                return response.data.result;
            })
    },

    unfollowUser(token, id) {
        return axios.delete(`http://localhost:8080/follow`, { headers: { token: token, id: id } },
        ).then(response => {
            return response.data.result;
        });
    },
}

export const ProfileApi = {
    getProfile(userId, token) {
        return axios.get(`http://localhost:8080/user/userpage?id=${userId}`, { headers: { token: token } }).then(response => {
            return response.data;
        });
    },
    changeStatus(token, status) {
        
        return axios.put(`http://localhost:8080/status`, {status: status}, { headers: { token: token } }).then(response => {
            return response.data;
            // console.log(response.data);
        });
    },
}

export const EnterApi = {
    enter(login, pass) {
        return axios.get(`http://localhost:8080/auth`, { headers: { login: login, password: pass } }).then(response => {
            return response.data.token;
        })
    }
}