import {ActionType} from "../constants/ActionsTypes";
import {authAPI, secureAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    id: null,
    login: '',
    email: '',
    isAuth: false,
    captchaUrl: ''
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.SET_CAPTCHA:
        case ActionType.SET_AUTH_DATE :

            return {
                ...state,
                ...action.payload
            };


        default :
            return state

    }
};
export const setAuthDates = (id, login, email, isAuth) => ({
    type: ActionType.SET_AUTH_DATE, payload: {id, login, email, isAuth}
});
export const setCaptcha = captchaUrl => ({
    type: ActionType.SET_CAPTCHA, payload: {captchaUrl}
});

export const getAuthUserDates = () => dispatch => {

    return authAPI.me().then(res => {

            if (res.resultCode === 0) {

                const {id, login, email} = res.data;

                dispatch(setAuthDates(id, login, email, true));

            }
        }
    );


};

export const login = (email, password, rememberMe , captcha) => dispatch => {

    authAPI.login(email, password, rememberMe, captcha).then(res => {

            if (res.resultCode === 0) {

                dispatch(getAuthUserDates());

            } else {

                if (res.resultCode === 10) {
                    dispatch(getCaptcha())
                }
                dispatch(stopSubmit('login', {_error: res.messages}))
            }
        }
    );


};
export const logout = () => dispatch => {

    authAPI.logout().then(res => {

            if (res.data.resultCode === 0) {

                dispatch(setAuthDates(null, '', '', false));

            }
        }
    );


};
export const getCaptcha = () => async dispatch => {

    const res = await secureAPI.getCaptcha();
    const captcha = res.url;

    dispatch(setCaptcha(captcha))
};

export default authReducer