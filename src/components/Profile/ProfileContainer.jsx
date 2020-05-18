import React from "react";
import {getProfile, getStatus, setAvatar, updateStatus} from '../../redux/profileReducer';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Profile from "./Profile";

class ProfileContainer extends React.Component {



    componentDidMount() {
        const id = this.props.match.params.userId;

        if (!id){
            this.props.history.push('/login')
        }
        console.log(id);
        console.log(this.props.userId);

        this.props.getProfile(id);

        this.props.getStatus(id);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
            const id = this.props.match.params.userId;

            if (!id){
                this.props.history.push('/login')
            }

            this.props.getProfile(id);

            this.props.getStatus(id);


    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                setAvatar={this.props.setAvatar}
                isOwner={+this.props.match.params.userId===this.props.userId}
            />
        )
    }

}

const mapStateToProps = (state) => {

    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        userId:state.authReducer.id
    }

};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    setAvatar
})(WithUrlDataContainerComponent);
