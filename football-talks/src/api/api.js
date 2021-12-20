import * as axios from 'axios';

export const UsersApi = {
    getUsers (pageSize, currentPage, token) {
        return axios.get(`http://localhost:8080/user?id=1&count=${pageSize}&page=${currentPage}`, 
        {headers:{token: token}}).then(response => {
            return response.data;
        });
    },

    getUsers2 (pageSize, pageNumber, token) {
        return axios.get(`http://localhost:8080/user?id=1&count=${pageSize}&page=${pageNumber}`, 
        {headers:{token: token}}).then(response => {
            return response.data;
        });
    }
}

export const ProfileApi = {
    getProfile (userId, token) {
        return axios.get(`http://localhost:8080/user/userpage?id=${userId}`, {headers:{token: token}}).then(response => { 
            return response.data;
        });
    },
}

export const EnterApi = {
    enter (login, pass) {
        return axios.get(`http://localhost:8080/auth`, {headers:{login: login, password: pass}}).then(response => {    
            return response.data.token;
        })
    }
}