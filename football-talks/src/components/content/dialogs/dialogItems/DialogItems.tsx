import { NavLink } from 'react-router-dom';
import c from './DialogItems.module.css';

type PropsType = {
    id: number,
    name: string,
}
const DialogItems: React.FC<PropsType> = (props) => {
    let path: string = "/dialogs/" + props.id;
    return (
        <div className={c.User}>
            <img src="https://image.flaticon.com/icons/png/512/108/108186.png" className={c.Avatar} />
            <span><NavLink to={path} activeClassName={c.Active}>{props.name}</NavLink></span><hr />
        </div>
    )
}

export default DialogItems;