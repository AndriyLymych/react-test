import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router";
import MainContainer from "./components/Main/MainContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/appReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./components/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Switch>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                    <Route path="/" exact>
                        <MainContainer/>
                    </Route>
                    <Route path="/users" exact>
                        <UsersContainer/>
                    </Route>

                    <Route path="/profile/:userId">
                        <ProfileContainer/>
                    </Route>

                </Switch>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.appReducer.initialized
    }
};

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)

