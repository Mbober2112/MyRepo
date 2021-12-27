import c from './Dialogs.module.css';
import React from 'react';
import DialogItems from './dialogItems/DialogItems';
import Message from './message/Message';
import { reduxForm, Field } from 'redux-form';

const DialogsForm = (props) => {
    return (
        <form className={c.Send} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'text'}/>
            <div>
                <button>Отправить сообщение</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm);


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItems name={d.name} id={d.id} />);

    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} />)

    const onSubmit = (formData) => {
        props.sendMessage(formData.text);
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
            <DialogsReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Dialogs;