import * as axios from 'axios';
import c from './Users.module.css';
import React from 'react';

class Users extends React.Component {

    componentDidMount () {
        axios.get('http://localhost:8080/user?id=1').then(response => {
            this.props.setUsers(response.data);
        })
    }

    render() {
        return <div>
            {
                this.props.allUsers.map(au => <div className={c.Users}>
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
                    {au.followed ? <button onClick={() => this.props.unfollow(au.id)}>Отписаться</button> : <button onClick={() => this.props.follow(au.id)}>Подписаться</button>}<hr />
                </div>)
            }
        </div>
    };
}

export default Users;