//First method
/**
 / let rerenderTree = () => {
// };
 // const state= {
//     headerMenu: [
//         {
//             id: 1,
//             name: 'Головна',
//
//         },
//         {
//             id: 2,
//             name: 'Про нас',
//
//         }, {
//             id: 3,
//             name: 'Послуги',
//
//         }, {
//             id: 4,
//             name: 'Контакти',
//
//         }
//     ],
//     main: {
//         messagesArray: [
//             {
//                 text: 'hello'
//             },
//             {
//                 text: 'i love js'
//             },
//             {
//                 text: 'i love react'
//
//             }],
//         massage: ''
//     }
// };
 //
 // export const addPost = (post) => {
//     state.main.messagesArray.push({
//         text: state.main.massage
//     });
//
//     state.main.massage = '';
//
//     rerenderTree();
//
// };

 // export const updateMsg = (msg) => {
//     state.main.massage = msg;
//
//     rerenderTree()
// };

 // export const subscriber = (observer) => {
//     rerenderTree = observer
// };
 */

//second method:
// import {ActionType} from "./constants/ActionsTypes";
//
//
//
// const store = {
//
//     _state: {
//
//         main: {
//             messagesArray: [
//                 {
//                     text: 'hello'
//                 },
//                 {
//                     text: 'i love js'
//                 },
//                 {
//                     text: 'i love react'
//
//                 }],
//             massage: ''
//         }
//     },
//
//     _rerenderTree() {
//     },
//     getState() {
//         return this._state
//     },
//     subscriber(observer) {
//         this._rerenderTree = observer;
//     },
//     dispatch(action){
//
//         if (action.type===ActionType.ADD_POST){
//
//             this._state.main.messagesArray.push({
//                 text: this._state.main.massage
//             });
//
//             this._state.main.massage = '';
//
//             this._rerenderTree(this._state)
//
//
//         }else if (action.type===ActionType.UPDATE_MSG){
//
//             this._state.main.massage = action.msg;
//
//             this._rerenderTree(this._state)
//         }
//     },
//
//
// }
//
//
// export default store
//
// window.state = store._state;