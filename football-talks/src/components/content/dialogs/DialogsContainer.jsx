import React from 'react';
import { connect } from 'react-redux';
import { changeNewMessage, sendMessage } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
        token: state.auth.token,
    }
}

const DialogsContainer = connect(mapStateToProps, {changeNewMessage, sendMessage}) (Dialogs);

export default DialogsContainer;