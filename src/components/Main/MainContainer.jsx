import React from "react";
import {addPost, updateMsg} from "../../redux/mainReducer";
import Main from "./Main";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {

        mainPage: state.mainReducer
    }
}


const MainContainer = connect(mapStateToProps, {addPost, updateMsg})(Main);

export default MainContainer