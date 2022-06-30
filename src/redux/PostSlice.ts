import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../tools/models/IPost";

interface PostState {
    posts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: PostState = {
    posts: [],
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