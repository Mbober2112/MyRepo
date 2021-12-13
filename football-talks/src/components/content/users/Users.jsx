import c from './Users.module.css';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                props.allUsers.map(au => <div className={c.Users}>
                    <div className={c.User}>
                        <div>
                            <img src="https://image.flaticon.com/icons/png/512/108/108186.png" className={c.Avatar} />
                        </div>
                        <div className={c.Info}>
                            <h3 className={c.Username}>{au.name}</h3>
                            <p>Клуб: {au.club}</p>
                            <p>Количество постов: {au.postsCounter}</p>
                            <p>Рейтинг: {au.raiting}</p>
                        </div>
                    </div>
                    {au.followed ? <button onClick={() => props.unfollow(au.id)}>Отписаться</button> : <button onClick={() => props.follow(au.id)}>Подписаться</button>}<hr />
                </div>)
            }
            <div className={c.Pages}>
                {pages.map(p => <span className={props.currentPage === p && c.Selected} onClick={() => props.onPageChanged(p)}>{p}</span>)}
            </div>
        </div>
    )
}

export default Users;