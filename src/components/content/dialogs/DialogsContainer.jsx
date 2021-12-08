import React from 'react';
import { changeNewMessageActionCreator, sendMessageActionCreator } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendNewMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    }

    let newMessageChange = (message) => {
        let action = changeNewMessageActionCreator(message);
        props.store.dispatch(action);
    }

    return (
        <Dialogs sendNewMessage={sendNewMessage} newMessageChange={newMessageChange} state={state}/>
    )
}

export default DialogsContainer;