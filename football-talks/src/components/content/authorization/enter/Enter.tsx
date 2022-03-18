import c from './Enter.module.css';

type PropsType = {
    login: string,
}
const Enter = (props: PropsType) => {
    return(
        <div>
            Hello {props.login}!
        </div>
    )
}

export default Enter;