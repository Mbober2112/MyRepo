import c from './Footer.module.css';

const Footer = () => {
    return(
        <div className={c.Footer}>
            <div className={c.Text}>Author: Bobrov E.I.</div>
            <a href="mailto:mbober2112@gmail.com">Mail: mbober2112@gmail.com</a>
            <div className={c.Text}>©Football Talks</div>
        </div>
    );
}

export default Footer;