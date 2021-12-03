import c from'./Header.module.css';

const Header = () => {
    return (
        <div className={c.Header}>
            <img src="https://na-oboi.ru/images/product_images/info_images/futbolnyj_myach_art_249TR.png" />
            <div className={c.Title}>Football Talks</div>
            <div className={c.Enter}>
                Вход
            </div>
            <div className={c.Registration}>
                Регистация
            </div>
        </div>
    );
}

export default Header;