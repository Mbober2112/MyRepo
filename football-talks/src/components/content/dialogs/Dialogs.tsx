import c from './Dialogs.module.css';
import React from 'react';
import DialogItems from './dialogItems/DialogItems';
import Message from './message/Message';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { DialogType, MessageType } from '../../../redux/dialogsReducer';

const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={c.Send} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'text'}/>
            <div>
                <button>Отправить сообщение</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm<FormDataType>({ form: 'dialogs' })(DialogsForm);

type DialogsPropsType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessageType>,
    sendMessage: (text: string) => void,
}

type FormDataType = {
    text: string,
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItems name={d.name} id={d.id} />);

    let messagesElements = props.messagesData.map(m => <Message message={m.message} />)

    const onSubmit = (formData: FormDataType) => {
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