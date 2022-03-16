const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';
const CHANGE_NEW_MESSAGE = 'dialogs/CHANGE-NEW-MESSAGE';

type DialogType = {
    id: number,
    name: string,
}

type MessageType = {
    id: number,
    message: string,
}

let initialState = {
    dialogsData: [
        { id: 1, name: "Pavel" },
        { id: 2, name: "Petr" },
        { id: 3, name: "Dima" },
        { id: 4, name: "Anton" },
    ] as Array<DialogType>,
    messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "Bye" },
    ] as Array<MessageType>,   
}

export type InitialStateType = typeof initialState; 

const DialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                id: 5,
                message: action.newMessage,
            }

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        
        default:
            return state;
    }
}
type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessage: string,
}
export const sendMessage = (message: string): SendMessageActionType => ({ type: SEND_MESSAGE, newMessage: message });

export default DialogsReducer;