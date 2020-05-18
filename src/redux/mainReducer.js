import {ActionType} from "../constants/ActionsTypes";

const initialState = {
    message: '',
    messagesArray: [
        {
            text: 'hello'
        },
        {
            text: 'i love js'
        },
        {
            text: 'i love react'

        }],


};

const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case ActionType.UPDATE_MSG :

            return {
                ...state,
                message: action.msg
            };


        case ActionType.ADD_POST :

            return {
                ...state,
                messagesArray: [...state.messagesArray, {text: state.message}],
                message: ''
            };


        default :
            return state

    }
};
export const addPost = () => ({type: ActionType.ADD_POST});

export const updateMsg = msg => ({type: ActionType.UPDATE_MSG, msg});

export default mainReducer