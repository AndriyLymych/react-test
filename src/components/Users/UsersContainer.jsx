import React from "react";
import {connect} from "react-redux";
import {
    followUser,
    setFollowingProgress,
    getUsers,
    getUsersOnPage,
    unFollowUser

} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingIdArraySelector, getIsLoadingStatusSelector, getUsersCountOnPageSelector,
    getUsersCountSelector,
    getUsersSuperSelector
} from "../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersCountOnPage);

    }

    onChangePage = (page) => {

        this.props.getUsersOnPage(page, this.props.usersCountOnPage)

    };

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader/> : null}
                <Users
                    usersCount={this.props.usersCount}
                    usersCountOnPage={this.props.usersCountOnPage}
                    currentPage={this.props.currentPage}
                    onChangePage={this.onChangePage}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unFollowUser}
                    users={this.props.users}
                    followingIdArray={this.props.followingIdArray}
                />
            </>
        )
    }

}

const mapStateToProps = (state) => {

    return {

        users: getUsersSuperSelector(state),
        currentPage: getCurrentPageSelector(state),
        usersCount: getUsersCountSelector(state),
        usersCountOnPage: getUsersCountOnPageSelector(state),
        isLoading: getIsLoadingStatusSelector(state),
        followingIdArray: getFollowingIdArraySelector(state),

    }
};

export default compose(
    connect(mapStateToProps, {
            followUser,
            setFollowingProgress,
            getUsers,
            getUsersOnPage,
            unFollowUser
        }
    )

)(UsersContainer)


