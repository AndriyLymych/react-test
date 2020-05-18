import {ActionType} from "../constants/ActionsTypes";
import {getAuthUserDates} from "./authReducer";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case ActionType.INITIALIZED_PROGRESS :

            return {
                ...state,
                initialized: true
            };


        default :
            return state

    }
};
export const setInitializedProgress = () => ({type: ActionType.INITIALIZED_PROGRESS});

export const initializeApp = () =>  dispatch => {
    const result = dispatch( getAuthUserDates());

    Promise.all([result]).then(()=>{
        dispatch(setInitializedProgress())

    });
};


export default appReducer