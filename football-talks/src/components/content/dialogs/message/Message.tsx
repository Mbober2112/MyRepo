import c from './Message.module.css';

type PropsType = {
    message: string,
}
const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={c.Message}>
            <div className={c.Dialog}>{props.message}</div>
        </div>
    )
}

export default Message;