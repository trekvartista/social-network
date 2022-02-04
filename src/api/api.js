import axios from 'axios';

const axiosInstance = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'efce9c83-1ae0-4516-8a1f-403dddee3b1f'
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 100, term = '', filter = 'All') => {

        let pageNum = currentPage
        if (currentPage <= 0) {
            pageNum = 1
        }
        let friend
        if (filter === 'All') {
            return axiosInstance
                    .get(`users?page=${pageNum}&count=${pageSize}&term=${term}`).then(response => response.data)
        } else if (filter === 'Followed') {
            friend = true
        } else {
            friend = false
        }

        return (
            axiosInstance
                .get(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`)
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
    },
    savePhoto: (file) => {
        let formData = new FormData();
        formData.append("image", file);
        return (
            axiosInstance
                .put(`profile/photo`, formData, {
                    headers: {
                        "Content-Type": 'multupart/form-data'
                    }
                })
                .then(response => response.data)
        )
    },
    saveProfile: (formData) => {

        return (
            axiosInstance
                .put(`profile`, formData)
                .then(response => response.data)
        )
    }
}

export const authAPI = {
    authMe: () => {
        return (
            axiosInstance
                .get(`auth/me`)
                .then(response => response.data)
        )
    },
    login: (email, password, rememberMe = false, captcha = null) => {
        return (
            axiosInstance
                .post(`auth/login`, { email, password, rememberMe, captcha })
                .then(response => response.data)
        )
    },
    logout: async () => {
        return axiosInstance.delete(`auth/login`).then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaURL: async () => {
        return axiosInstance.get(`security/get-captcha-url`).then(response => response.data);
    }
}
