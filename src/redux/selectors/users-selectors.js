import {createSelector} from "reselect";


export const getUsersSelector = state => {
    return state.usersReducer.users
};

export const getCurrentPageSelector = state => {
    return state.usersReducer.currentPage
};
export const getUsersCountSelector = state => {
    return state.usersReducer.usersCount
};
export const getUsersCountOnPageSelector = state => {
    return state.usersReducer.usersCountOnPage
};
export const getIsLoadingStatusSelector = state => {
    return state.usersReducer.isLoading
};
export const getFollowingIdArraySelector = state => {
    return state.usersReducer.followingIdArray
};

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

