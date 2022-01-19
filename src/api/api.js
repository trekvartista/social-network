import * as axios from 'axios';

const axiosInstance = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'efce9c83-1ae0-4516-8a1f-403dddee3b1f'
    }
})

export const getUsers = (currentPage = 1, pageSize = 100) => {
    return (
        axiosInstance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    )
}

export const getUserProfile = (userId) => {
    return (
        axiosInstance
            .get(`profile/${userId}`)
            .then(response => response.data)
    )
}

export const authMe = () => {
    return (
        axiosInstance
            .get(`auth/me`)
            .then(response => response.data)
    )
}

export const follow = (userId) => {
    return (
        axiosInstance
            .post(`follow/${userId}`, {})
            .then(response => response.data)
    )
}

export const unfollow = (userId) => {
    return (
        axiosInstance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    )
}