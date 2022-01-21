import axios from 'axios';

const axiosInstance = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'efce9c83-1ae0-4516-8a1f-403dddee3b1f'
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 100) => {
        return (
            axiosInstance
                .get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    follow: (userID) => {
        return (
            axiosInstance
                .post(`follow/${userID}`, {})
                .then(response => response.data)
        )
    },
    unfollow: (userID) => {
        return (
            axiosInstance
                .delete(`follow/${userID}`)
                .then(response => response.data)
        )
    }
}

export const profileAPI = {
    getUserProfile: (userID) => {
        return (
            axiosInstance
                .get(`profile/${userID}`)
                .then(response => response.data)
        )
    }
}


export const authMe = () => {
    return (
        axiosInstance
            .get(`auth/me`)
            .then(response => response.data)
    )
}