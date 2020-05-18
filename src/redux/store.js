import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import mainReducer from "./mainReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer"
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";

const reducers = combineReducers({
    mainReducer,
    usersReducer,
    profileReducer,
    authReducer,
    form: formReducer,
    appReducer
});
//для розширення хрому - редакс
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));


// const store = createStore(reducers, applyMiddleware(thunk));

export default store

window.state = store.getState();