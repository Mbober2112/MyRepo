import { NavLink } from 'react-router-dom';
import c from './Users.module.css';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    let follow;

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    if (!props.friends) {
        return <div></div>
    }

    return (
        <div>
            {
                props.allUsers.map(au => {
                    follow = false;
                    for (let i = 0; i < props.friends.length; i++) {
                        if (au.id === props.friends[i].id) {
                            follow = true;
                        }
                    }
                    return <div className={c.Users}>
                        <div className={c.User}>
                            <div>
                                <NavLink to={'/profile/' + au.id} >
                                    <img src="https://image.flaticon.com/icons/png/512/108/108186.png" className={c.Avatar} />
                                </NavLink>
                            </div>
                            <div className={c.Info}>
                                <h3 className={c.Username}>{au.name}</h3>
                                <p>Клуб: {au.club}</p>
                                <p>Количество постов: {au.postsCounter}</p>
                                <p>Рейтинг: {au.raiting}</p>
                            </div>
                        </div>
                        {follow
                            ? <button onClick={() => {props.unfollowTC(props.token, au.id)}}>Отписаться</button>
                            : <button onClick={() =>{props.followTC(props.token, au.id)}}>Подписаться</button>}<hr />
                    </div>
                })
            }
            <div className={c.Pages}>
                {pages.map(p => <span className={props.currentPage === p && c.Selected} onClick={() => props.onPageChanged(p)}>{p}</span>)}
            </div>
        </div>
    )
}

export default Users;