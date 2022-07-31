import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFriend } from "../tools/models/IFriend";
import { IMessage } from '../tools/models/IMessage';

interface FriendState {
    friends: IFriend[];
}

const initialState: FriendState = {
    friends: [
        {id: 1, name: 'Luda', surname: 'Ionova', city: 'Moscow', age: 22, image: '/images/friend1.png', messages: [
            {id: 1, message: 'Hello!'}, {id: 2, message: 'My name is Roman'}, {id: 3, message: 'How do you do?'}
        ]},
        {id: 2, name: 'Egor', surname: 'Sidorov', city: 'Volgograd', age: 18, image: '/images/friend2.png', messages: []},
        {id: 3, name: 'Anton', surname: 'Petriv', city: 'Kazan', age: 32, image: '/images/friend3.png', messages: []},
        {id: 4, name: 'Vitaly', surname: 'Alekseev', city: 'Kazan', age: 25, image: '/images/friend4.png', messages: []},
        {id: 5, name: 'Svetlana', surname: 'Voronova', city: 'Moscow', age: 41, image: '/images/friend5.png', messages: []},
    ]
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<IMessage>) => {
            for (let i = 0; i < state.friends.length; i++) {
                let userName = state.friends[i].name;
                if (window.location.pathname===`/friends/${userName}/Dialog`){
                    state.friends[i].messages.push(action.payload)
                }
            }
    }}})
export default friendSlice.reducer;