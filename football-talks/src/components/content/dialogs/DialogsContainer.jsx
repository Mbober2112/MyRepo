import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { changeNewMessage, sendMessage } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose (
    connect(mapStateToProps, {changeNewMessage, sendMessage}),
    withAuthRedirect,) (Dialogs);
