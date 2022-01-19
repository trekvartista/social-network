import * as axios from 'axios';

export const getUsers = (currentPage = 1, pageSize = 100) => {
    return (
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => response.data)
    )
}

export const getUserProfile = (userId) => {
    return (
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
            {
                withCredentials: true
            })
            .then(response => response.data)
    )
}

export const authMe = () => {
    return (
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true
            })
            .then(response => response.data)
    )
}

export const follow = (userId) => {
    return (
        axios
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": 'efce9c83-1ae0-4516-8a1f-403dddee3b1f'
                }
            })
            .then(response => response.data)
    )
}

export const unfollow = (userId) => {
    return (
        axios
        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": 'efce9c83-1ae0-4516-8a1f-403dddee3b1f'
                }
            })
            .then(response => response.data)
    )
}