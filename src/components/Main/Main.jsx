import React from "react";
import style from './Main.module.css'
import MsgCard from "./MsgCard/MsgCard";

const Main = (props) => {


    const messages = props.mainPage.messagesArray.map((msg => <MsgCard msg={msg.text}/>))


    const updateMsg = (e) => {

        props.updateMsg(e.target.value)
    };

    const addPost = () => {

        props.addPost()
    };

    return (
        <main>
            <h1>Введіть повідомлення:</h1>

            <textarea onChange={updateMsg} value={props.mainPage.message}/>

            <button onClick={addPost}>Відправити</button>

            {messages}

        </main>
    )
}

export default Main