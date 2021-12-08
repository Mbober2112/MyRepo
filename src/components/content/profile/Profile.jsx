import c from './Profile.module.css';
import React from 'react';
import MyPosts from './myPosts/MyPosts';
import { NavLink } from 'react-router-dom';

const Profile = (props) => {

    let myPostsElements = props.myPostsData.map(
        p => <MyPosts title={p.title} text={p.text} likes={p.likes} dislikes={p.dislikes} />
    );
    
    let raiting = 0;

    for (let i = 0; i<props.myPostsData.length; i++) {
        raiting = raiting + props.myPostsData[i].likes - props.myPostsData[i].dislikes;
    }

    return (
        <div className={c.Profile}>
            <img src="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg" className={c.Avatar} />
            <div className={c.Info}>
                <h4>Username</h4><hr />
                <p>Любимый клуб</p>
                <p>Количество постов: {props.myPostsData.length}</p>
                <p>Рейтинг: {raiting}</p>
            </div>
            <div className={c.MyPosts}>
                <h3>Посты пользователя</h3>
                    <NavLink to="/addpost">Добавить пост</NavLink><hr />
                {myPostsElements}
            </div>
        </div>
    );
}

export default Profile;