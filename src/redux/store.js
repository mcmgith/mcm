import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: { 
            profilePage:{},
            dialogsPage:{ 
                dialogs: [
                    {id: 1,name: "Sveta" }, 
                    {id: 2,name: "Dasha"} 
                ],
                messages: [ 
                    {id: 1,message: "Hi"}, 
                    {id: 2,message: "What are you doing?"} 
                ],
                newMessageBody: ''
            },
            sidebar:{}
            },
    _callSubscriber() {
        console.log('State is change');
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }   
}
window.store = store;
export default store;

