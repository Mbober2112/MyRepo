import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { tokenSelector } from '../../../redux/selectors/GeneralSelectors';
import { allUsersSelector, currentPageSelector, friendsSelector, pageSizeSelector, TotalUsersCountSelector } from '../../../redux/selectors/UsersSelectors';
import { followTC, FriendType, getUsers, setCurrentPage, unfollowTC, UserType } from '../../../redux/usersReducer';
import c from './Users.module.css';

type PropsType = {
}
export const Users: React.FC<PropsType> = (props) => {

    const allUsers = useSelector(allUsersSelector);
    const totalUsersCount = useSelector(TotalUsersCountSelector);
    const pageSize = useSelector(pageSizeSelector);
    const friends = useSelector(friendsSelector);
    const token = useSelector(tokenSelector);
    const currentPage = useSelector(currentPageSelector);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers(pageSize, currentPage, token));
    }, []);

    const getUnfollow =  (token: string, id: number) => {
        dispatch(unfollowTC(token, id));
    }

    const getFollow =  (token: string, id: number) => {
        dispatch(followTC(token, id));
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(getUsers(pageSize, pageNumber, token));
    }

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);

    let pages: Array<number> = [];
    let follow: boolean;

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    if (!friends) {
        return <div></div>
    }

    return (
        <div>
            {
                allUsers.map(au => {
                    follow = false;
                    for (let i = 0; i < friends.length; i++) {
                        if (au.id === friends[i].id) {
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
                            ? <button onClick={() => {getUnfollow(token, au.id)}}>Отписаться</button>
                            : <button onClick={() =>{getFollow(token, au.id)}}>Подписаться</button>}<hr />
                    </div>
                })
            }
            <div className={c.Pages}>
                {pages.map(p => <span className={(currentPage === p && c.Selected) as string}  onClick={() => onPageChanged(p)}>{p}</span>)}
            </div>
        </div>
    )
}
