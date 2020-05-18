import React from "react";
import {logout,getAuthUserDates} from "../../redux/authReducer";
import {connect} from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserDates()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {

    return {
        auth: state.authReducer,
    }

};


export default connect(mapStateToProps, {logout,getAuthUserDates})(HeaderContainer);
