import {ActionType} from "../constants/ActionsTypes";
import {profileApi} from "../api/api";

const initialState = {
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {


        case ActionType.SET_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case ActionType.SET_USER_STATUS:
            return {
                ...state, status: action.status
            };
        case ActionType.SET_AVATAR:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            };


        default :
            return state

    }
};
export const setProfile = profile => ({type: ActionType.SET_PROFILE, profile});

export const setUserStatus = status => ({type: ActionType.SET_USER_STATUS, status});

export const setUserAvatar = photos => ({type: ActionType.SET_USER_STATUS, photos});


export const getProfile = id => dispatch => {

    profileApi.getUserProfile(id).then(res => {

            dispatch(setProfile(res));
        }
    )
};

export const getStatus = id => dispatch => {

    profileApi.getUserStatus(id).then(res => {
            dispatch(setUserStatus(res));
        }
    )
};

export const updateStatus = status => dispatch => {

    profileApi.updateUserStatus(status).then(res => {

        dispatch(setUserStatus(status));

    })
};

export const setAvatar = avatar => dispatch => {

    profileApi.setAvatar(avatar).then(res => {

        dispatch(setUserAvatar(avatar));

    })
};


export default profileReducer