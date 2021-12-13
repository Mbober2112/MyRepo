import React from 'react';
import { connect } from 'react-redux';
import { changeNewMessageActionCreator, sendMessageActionCreator } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        },
        newMessageChange: (message) => {
            let action = changeNewMessageActionCreator(message);
            dispatch(action);
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;