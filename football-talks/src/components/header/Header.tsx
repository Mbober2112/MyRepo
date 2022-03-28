import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeAuthData } from '../../redux/authReducer';
import c from'./Header.module.css';

type PropsType = {
    // changeAuthData: (a: string, b: string) => void
}

export const Header = (props: PropsType) => {

    const dispatch = useDispatch();
    const onChangeAuthData = (login: string, pass: string) => {
        dispatch(changeAuthData(login, pass)); 
    }
    return (
        <div className={c.Header}>
            <img src="https://na-oboi.ru/images/product_images/info_images/futbolnyj_myach_art_249TR.png" />
            <div className={c.Title}>Football Talks</div>
            <NavLink to='/auth'>
                <div onClick={() =>onChangeAuthData('', '')} className={c.Enter}>
                    Вход
                </div>
            </NavLink>
            <div className={c.Registration}>
                Регистация
            </div>
        </div>
    );
}
