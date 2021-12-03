import c from './Message.module.css';

const Message = (props) => {
    return (
        <div className={c.Message}>
            <div className={c.Dialog}>{props.message}</div>
        </div>
    )
}

export default Message;