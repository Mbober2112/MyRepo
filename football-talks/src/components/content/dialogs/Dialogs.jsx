import c from './Dialogs.module.css';
import React from 'react';
import DialogItems from './dialogItems/DialogItems';
import Message from './message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItems name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message}/>)

    let newMessageText = React.createRef();

    let sendNewMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = () => {
        let message = newMessageText.current.value;
        props.changeNewMessage(message);
    }

    return (
        <div className={c.Dialogs}>
            <div className={c.Users}>
                {dialogsElements}
            </div>
            <div className={c.Line}></div>
            <div className={c.Messages}>
                {messagesElements}
            </div>
            <div className={c.Send}>
                <textarea onChange={onNewMessageChange} ref={newMessageText} value={props.dialogsPage.newMessageText}></textarea>
                <div>
                    <button onClick={sendNewMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;