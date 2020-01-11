const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs:  [
                {id: 1,name: "Sveta" }, 
                {id: 2,name: "Dasha"} 
              ],
    messages: [ 
                {id: 1,message: "Hi"}, 
                {id: 2,message: "What are you doing?"} 
              ]
};

const dialogsReducer = (state = initialState, action) => {
switch(action.type){
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{ id: 51, message: body}]
            };
        
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {return {type: SEND_MESSAGE, newMessageBody}}

export default dialogsReducer;

