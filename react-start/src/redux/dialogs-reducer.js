const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   dialogsData: [
      {id: 1, name: 'Anton',},
      {id: 2, name: 'Vasiliy',},
      {id: 3, name: 'Jenya',},
      {id: 4, name: 'Petr',},
      {id: 5, name: 'Katya',},
      {id: 6, name: 'Sasha',},
      ],
   messages: [
      {id: 1, message: 'Hi!',},
      {id: 2, message: 'How are you?',},
      {id: 3, message: 'Hello!Would you like to buy our react courses?',},
      {id: 4, message: 'Hello!!'},
      {id: 5, message: 'LOL!',},
      {id: 6, message: 'Bye.',},
    ],
   newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
   switch(action.type) {
      case UPDATE_NEW_MESSAGE_BODY: {
         return {
            ...state,
            newMessageBody: action.body,
         };
      }
      case SEND_MESSAGE: {
         let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 7, message: body}],
         };
      }
      default:
         return state;
   };
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export default dialogsReducer;