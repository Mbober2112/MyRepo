const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }

            state.messagesData.push(newMessage);
            state.newMessageText = "";

            return state;

        case CHANGE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const changeNewMessageActionCreator = (message) => ({ type: CHANGE_NEW_MESSAGE, newMessage: message });

export default DialogsReducer;