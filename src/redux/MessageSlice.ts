import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IMessage } from './../tools/models/IMessage';

interface MessageState {
    messages: IMessage[],
}

const initialState: MessageState = {
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'My name is Roman'}, 
        {id: 3, message: 'How do you do?'}
    ]
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<IMessage>) => {
            state.messages.push(action.payload)
    }
}
})
export default messageSlice.reducer;