const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

let initialState = {
        dialogsData: [
            { id: 1, name: "Pavel" },
            { id: 2, name: "Petr" },
            { id: 3, name: "Dima" },
            { id: 4, name: "Anton" },
        ],
        messagesData: [
            { id: 1, message: "Hello" },
            { id: 2, message: "Hi" },
            { id: 3, message: "How are you?" },
            { id: 4, message: "Bye" },
        ],
        newMessageText: "",
}

const DialogsReducer = (state = initialState, action) => {
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