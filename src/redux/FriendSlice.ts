import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFriend } from "../tools/models/IFriend";
import { IMessage } from '../tools/models/IMessage';

interface FriendState {
    friends: IFriend[];
}

const initialState: FriendState = {
    friends: [
        {id: 1, name: 'Luda', surname: 'Ionova', city: 'Moscow', age: 22, image: '/images/friend1.png', 
        messages: [
            {id: 1, message: 'Hello!'}, {id: 2, message: 'My name is Roman'}, {id: 3, message: 'How do you do?'}
        ], 
        posts: [
            {id: 1, title: 'The world is wonderful!', body: 'Today is sunny day. The weather is georgeous'},
            {id: 2, title: 'The green is my favorite color.', body: 'Tommorow will be sunny day. The weather will be georgeous. ad mollitia et omnis minus architecto odit voluptas doloremque maxime aut non ipsa qui alias veniam blanditiis culpa aut quia nihil cumque facere et occaecati qui aspernatur quia eaque ut aperiam inventore'},
            {id: 3, title: 'There is a light on the window.', body: 'I want on the out. The weather is georgeous. ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'},
            {id: 4, title: 'The blue is my second favorite.', body: 'Tommorow will be sunny day. The weather will be georgeous'},
            {id: 5, title: 'There is a light on the door.', body: 'I want on the out. The weather is georgeous'},
            {id: 6, title: 'The dog is my favorite animal.', body: 'Tommorow will be sunny day. The weather will be georgeous. ad mollitia et omnis minus architecto odit voluptas doloremque maxime aut non ipsa qui alias veniam blanditiis culpa aut quia nihil cumque facere et occaecati qui aspernatur quia eaque ut aperiam inventore'},
            {id: 7, title: 'There is a light on the street.', body: 'I want on the out. The weather is georgeous. ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'},
        ]},
        {id: 2, name: 'Egor', surname: 'Sidorov', city: 'Volgograd', age: 18, image: '/images/friend2.png', messages: [], posts: []},
        {id: 3, name: 'Anton', surname: 'Petriv', city: 'Kazan', age: 32, image: '/images/friend3.png', messages: [], posts: []},
        {id: 4, name: 'Vitaly', surname: 'Alekseev', city: 'Kazan', age: 25, image: '/images/friend4.png', messages: [], posts: []},
        {id: 5, name: 'Svetlana', surname: 'Voronova', city: 'Moscow', age: 41, image: '/images/friend5.png', messages: [], posts: []},
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