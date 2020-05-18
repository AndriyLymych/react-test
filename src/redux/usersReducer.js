import {ActionType} from "../constants/ActionsTypes";
import {usersAPI} from "../api/api";

const initialState = {
    users: [],
    usersCountOnPage: 5,
    usersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingIdArray: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case ActionType.FOLLOW_TOGGLE :

            return {
                ...state,

                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            };

        case ActionType.SET_USERS:
            return {
                ...state, users: action.users
            };

        case ActionType.SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };

        case ActionType.SET_USERS_COUNT:
            return {
                ...state, usersCount: action.count
            };
        case ActionType.IS_LOADING_TOGGLE:
            return {
                ...state, isLoading: action.isLoading
            };

        case ActionType.SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingIdArray: action.isFollowing ? [...state.followingIdArray, action.id] :
                    state.followingIdArray.filter(id => id !== action.id)
            };

        default :
            return state

    }
};

export const setUsers = users => ({type: ActionType.SET_USERS, users});

export const followToggle = id => ({type: ActionType.FOLLOW_TOGGLE, id});

export const setUsersCount = count => ({type: ActionType.SET_USERS_COUNT, count});

export const setCurrentPage = currentPage => ({type: ActionType.SET_CURRENT_PAGE, currentPage});

export const setIsLoading = isLoading => ({type: ActionType.IS_LOADING_TOGGLE, isLoading});

export const setFollowingProgress = (isFollowing, id) => ({type: ActionType.SET_FOLLOWING_PROGRESS, isFollowing, id});

export const getUsers = (currentPage, usersCountOnPage) => dispatch => {

        dispatch(setIsLoading(true));

        usersAPI.getUsers(currentPage, usersCountOnPage).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setUsers(res.items));
            dispatch(setUsersCount(res.totalCount))
        })
};

export const getUsersOnPage = (currentPage, usersCountOnPage) => dispatch => {
        dispatch(setIsLoading(true));

        dispatch(setCurrentPage(currentPage));

        usersAPI.getUsers(currentPage, usersCountOnPage).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setUsers(res.items));
            dispatch(setUsersCount(res.totalCount))
        })
};

export const followUser = id => dispatch => {
        dispatch(setFollowingProgress(true, id));

        usersAPI.followUser(id).then(res => {

            if (res.resultCode === 0) {

                dispatch(followToggle(id));
                dispatch(setFollowingProgress(false, id))
            }
        })
};

export const unFollowUser = id => dispatch => {

        dispatch(setFollowingProgress(true, id));

        usersAPI.unFollowUser(id).then(res => {

            if (res.resultCode === 0) {

                dispatch(followToggle(id));
                dispatch(setFollowingProgress(false, id))
            }
        })
};

export default usersReducer