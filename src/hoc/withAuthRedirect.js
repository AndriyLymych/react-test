import * as React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

const mapStateToProps = state => {

    return {
        isAuth: state.authReducer.isAuth
    }
};
export const withAuthRedirect = Component => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    const connectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return connectedAuthRedirectComponent
};