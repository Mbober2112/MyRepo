import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginTC } from '../../../../redux/authReducer';
import { loginSelector, passwordSelector } from '../../../../redux/selectors/GeneralSelectors';
import c from './Enter.module.css';

type PropsType = {
    
}
const Enter: React.FC<PropsType> = (props) => {

    const login = useSelector(loginSelector);
    const pass = useSelector(passwordSelector);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loginTC(login, pass));
    }, []);

    

    return(
        <div>
            Hello {login}!
        </div>
    )
}

export default Enter;