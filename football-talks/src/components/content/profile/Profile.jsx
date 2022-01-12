import c from './Profile.module.css';
import React from 'react';
import MyPosts from './myPosts/MyPosts';
import { NavLink } from 'react-router-dom';
import ProfileStatus from './profileStatus/ProfileStatus';
import ProfileStatusWithHooks from './profileStatus/ProfileStatusWithHooks';

const Profile = (props) => {

    let changePostAdded = () => {
        props.postAddedChange();
    }

    let raiting = 0;

    for (let i = 0; i<props.myPostsData.length; i++) {
        raiting = raiting + props.myPostsData[i].likes - props.myPostsData[i].dislikes;
    }

    if (!props.profile) {
        return <div></div>
    }

    let myPostsElements;
    
    if (!props.profile.posts){
        
        myPostsElements=[];
    } else {
        myPostsElements = props.profile.posts.map(
        p => <MyPosts title={p.title} text={p.text} likes={p.likes} dislikes={p.dislikes} />
        );
    }
    return (
        <div className={c.Profile}>
            
            <img src="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg" className={c.Avatar} />
            <div className={c.Info}>
                <h4>{props.profile.name}</h4><hr />
                <ProfileStatusWithHooks profile={props.profile} setStatus={props.setStatus} token={props.token}/>
                <p>Любимый клуб: {props.profile.club}</p>
                <p>Количество постов: {props.myPostsData.length}</p>
                <p>Рейтинг: {raiting}</p>
            </div>
            <div className={c.MyPosts}>
                <h3>Посты пользователя</h3>
                    <NavLink to="/addpost"><button onClick={changePostAdded}>Добавить пост</button></NavLink><hr />
                {myPostsElements}
            </div>
        </div>
    );
}

export default Profile;