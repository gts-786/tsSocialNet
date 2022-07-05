import { createSlice } from '@reduxjs/toolkit';
import { IFriend } from "../tools/models/IFriend";
import friend1 from "../tools/images/friend1.png";

interface FriendState {
    friends: IFriend[];
}

const initialState: FriendState = {
    friends: [
        {id: 1, name: 'Luda', city: 'Moscow', age: 22, image: {friend1}},
        {id: 2, name: 'Egor', city: 'Volgograd', age: 18, image: {friend1}},
        {id: 3, name: 'Anton', city: 'Kazan', age: 32, image: ''},
        {id: 4, name: 'Alexey', city: 'Kazan', age: 25, image: ''},
        {id: 5, name: 'Svetlana', city: 'Moscow', age: 41, image: ''},
    ]
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {}
})
export default friendSlice.reducer;