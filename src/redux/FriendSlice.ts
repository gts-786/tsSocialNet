import { createSlice } from '@reduxjs/toolkit';
import { IFriend } from "../tools/models/IFriend";

interface FriendState {
    friends: IFriend[];
}

const initialState: FriendState = {
    friends: [
        {id: 1, name: 'Luda', city: 'Moscow', age: 22, image: '/images/friend1.png'},
        {id: 2, name: 'Egor', city: 'Volgograd', age: 18, image: '/images/friend2.png'},
        {id: 3, name: 'Anton', city: 'Kazan', age: 32, image: '/images/friend3.png'},
        {id: 4, name: 'Alexey', city: 'Kazan', age: 25, image: '/images/friend4.png'},
        {id: 5, name: 'Svetlana', city: 'Moscow', age: 41, image: '/images/friend5.png'},
    ]
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {}
})
export default friendSlice.reducer;