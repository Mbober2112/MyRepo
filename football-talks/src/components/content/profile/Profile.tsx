import c from './Profile.module.css';
import React, { ElementRef, ElementType, useEffect } from 'react';
import MyPosts from './myPosts/MyPosts';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import ProfileStatusWithHooks from './profileStatus/ProfileStatusWithHooks';
import { MyPostType, postAddedChange } from '../../../redux/addPostReducer';
import { JsxChild } from 'typescript';
import { useDispatch, useSelector } from 'react-redux';
import { myPostsDataSelector, profileSelector } from '../../../redux/selectors/ProfileSelectors';
import { tokenSelector } from '../../../redux/selectors/GeneralSelectors';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

type PropsType = {
    // myPostsData: Array<MyPostType>,
    // profile: ProfileType | null,
    // token: string,
    // postAddedChange: () => void,
    setStatus: (token: string, status: string) => void,
}

const Profile: React.FC<PropsType> = (props) => {

    const myPostsData = useSelector(myPostsDataSelector);
    const profile = useSelector(profileSelector);
    const token = useSelector(tokenSelector);

    const dispatch = useDispatch();

    let changePostAdded = () => {
        dispatch(postAddedChange());
    }

    let raiting = 0;

    for (let i = 0; i<myPostsData.length; i++) {
        raiting = raiting + myPostsData[i].likes - myPostsData[i].dislikes;
    }

    if (!profile) {
        return <div></div>
    }

    let myPostsElements: Array<any>;
    
    if (!profile.posts){
        myPostsElements=[];
    } else {
        myPostsElements = profile.posts.map(
        p => <MyPosts title={p.title} text={p.text} likes={p.likes} dislikes={p.dislikes} />
        );
    }
    
    return (
        <div className={c.Profile}>
            
            <img src="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg" className={c.Avatar} />
            <div className={c.Info}>
                <h4>{profile.name}</h4><hr />
                <ProfileStatusWithHooks profile={profile} setStatus={props.setStatus} token={token}/>
                <p>Любимый клуб: {profile.club}</p>
                <p>Количество постов: {myPostsData.length}</p>
                <p>Рейтинг: {raiting}</p>
            </div>
            <div className={c.MyPosts}>
                <h3>Посты пользователя</h3>
                {(profile.token === token) && <div>
                    <NavLink to="/addpost"><button onClick={changePostAdded}>Добавить пост</button></NavLink>
                </div>
                }
                <hr />   
                {myPostsElements}
            </div>
        </div>
    );
}

export default Profile;