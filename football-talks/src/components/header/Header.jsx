import { NavLink } from 'react-router-dom';
import c from'./Header.module.css';

const Header = (props) => {
    return (
        <div className={c.Header}>
            <img src="https://na-oboi.ru/images/product_images/info_images/futbolnyj_myach_art_249TR.png" />
            <div className={c.Title}>Football Talks</div>
            <NavLink to='/auth'>
                <div className={c.Enter}>
                    Вход
                </div>
            </NavLink>
            <div className={c.Registration}>
                Регистация
            </div>
        </div>
    );
}

export default Header;