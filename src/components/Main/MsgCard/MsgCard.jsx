import React from "react";
import style from './MsgCard.module.css'

const MsgCard = (props) => {

    return (
        <div className={style.container}>
            {props.msg}
        </div>
    )
}

export default MsgCard