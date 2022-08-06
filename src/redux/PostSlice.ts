import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../tools/models/IPost";

interface PostState {
    posts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: PostState = {
    posts: [{id: 1, title: 'The world is wonderful!', body: 'Today is sunny day. The weather is georgeous!'},
    {id: 2, title: 'The green is my favorite color.', body: 'It color has link with nature. Many people like this color and I understand their. Blue is beautiful color too. The sky has this. Tommorow will be sunny day. The weather will be georgeous.'},],
    isLoading: false,
    error: '',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        addPost (state, action: PayloadAction<IPost>) {
            state.posts.push(action.payload)
        },
        removePost (state, action: PayloadAction<IPost>) {
            const index = state.posts.findIndex((post) => post.id === action.payload.id)
            state.posts.splice(index, 1);
        },
        postsFetching (state) {
            state.isLoading = true
        },
        postsFetchingSuccess (state, action: PayloadAction<IPost[]>) {
            state.isLoading = false
            state.error = ''
            /* Array.prototype.push.apply(state.posts, action.payload) */ // если нужно объеденить посты свои и сервера
            state.posts = action.payload
        },
        postsFetchingError (state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})
export default postSlice.reducer;