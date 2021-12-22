import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { changeNewMessage, sendMessage } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let authRedirectComponent = withAuthRedirect(Dialogs);

const mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
    }
}

const DialogsContainer = connect(mapStateToProps, {changeNewMessage, sendMessage}) (authRedirectComponent);

export default DialogsContainer;