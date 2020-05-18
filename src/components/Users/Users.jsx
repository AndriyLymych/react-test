import React, {useState} from "react";
import style from './Users.module.css'
import userAvatar from '../../assets/img/user.png'
import {NavLink} from "react-router-dom";


const Users = props => {

    const pagesCount = Math.ceil(props.usersCount / props.usersCountOnPage);


    let pages = [];

    for (let i = 1; i < pagesCount; i++) {

        pages.push(i)

    }
    const portionCount = Math.ceil(pagesCount / props.usersCountOnPage);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftAboard = (portionNumber - 1) * props.usersCountOnPage + 1;
    const rightAboard = portionNumber * props.usersCountOnPage + 1;

    return (
        <div>

            <div>
                {portionNumber > 1 && <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Попередня</button>}
                {
                    pages.filter(p => p >= leftAboard && p <= rightAboard).map(p => {
                        return <span
                            className={props.currentPage === p && style.pageNumber}
                            onClick={() => {
                                props.onChangePage(p)
                            }}>

                            {p + ' '}
                        </span>
                    })}
                {portionCount > portionNumber && <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Наступна</button>}
            </div>

            <div className={style.usersContainer}>

                <div>{props.users.map(
                    user =>
                        <div className={style.user} key={user.id}>

                            <NavLink to={`/profile/${user.id}`}>

                                <img src={user.photos.small !== null ? user.photos.small : userAvatar} height='100px'
                                     width="100px"/>

                            </NavLink>
                            <div>NickName: {user.name} </div>

                            {!user.followed ?
                                <button disabled={props.followingIdArray.some(id => id === user.id)} onClick={() => {
                                    props.followUser(user.id)

                                }}>follow</button> :
                                <button disabled={props.followingIdArray.some(id => id === user.id)} onClick={() => {

                                    props.unfollowUser(user.id)

                                }}>unfollow</button>
                            }
                        </div>
                )}</div>

            </div>


        </div>

    )
};


export default Users