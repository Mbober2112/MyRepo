import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {DialogType, MessageType, sendMessage } from '../../../redux/dialogsReducer';
import { AppStateType } from '../../../redux/reduxStore';
import Dialogs from './Dialogs';

type MapStatePropsType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessageType>,
}

type MapDispatchPropsType = {
    sendMessage: (text: string) => void,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}

export default compose<React.ComponentType> (
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {sendMessage}),
    withAuthRedirect,) (Dialogs);