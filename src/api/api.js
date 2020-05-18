import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "6c35eb4b-e24a-4dba-8951-c4f0ed3cc673"
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, usersCountOnPage) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${usersCountOnPage}`,
        ).then(res => res.data)
    },
    followUser: id => {
        return axiosInstance.post(`follow/${id}`, {}).then(res => res.data)
    },
    unFollowUser: id => {
        return axiosInstance.delete(`follow/${id}`).then(res => res.data)
    }

};

export const profileApi = {

    getUserProfile: id => {
        return axiosInstance.get(`profile/${id}`).then(res => res.data)
    },
    getUserStatus: id => {
        return axiosInstance.get(`profile/status/${id}`).then(res => res.data)
    },
    updateUserStatus: status => {
        return axiosInstance.put(`profile/status`, {
            status: status
        })
    },
    setAvatar: avatar => {
        const formData = new FormData();
        formData.append('image', avatar);

        return axiosInstance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }

};

export const authAPI = {
    me: () => {
        return axiosInstance.get(`auth/me`).then(res => res.data)
    },
    login: (email, password, rememberMe, captcha = '') => {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout: () => {
        return axiosInstance.delete(`auth/login`)
    },
};

export const secureAPI = {
    getCaptcha: () => {
        return axiosInstance.get('security/get-captcha-url').then(res => res.data)
    }
};