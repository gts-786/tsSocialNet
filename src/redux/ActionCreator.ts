import { getPageCount } from './../tools/pages';
import { IPost } from './../tools/models/IPost';
import axios from "axios";
import { postSlice } from "./PostSlice";
import { AppDispatch } from "./store";
import { useParams } from 'react-router-dom';

export const fetchPosts = (limit: number, page: number, setTotalPages: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching());
        const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts',
        {
            params: {
                _limit: limit,
                _page: page
            }
        })
        dispatch(postSlice.actions.postsFetchingSuccess(response.data));
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    }
    catch (error) {
        dispatch(postSlice.actions.postsFetchingError((error as Error).message));
    }
}

export const fetchPostsById = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching());
        const response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            params: {
                _id: id
            }
        })
        dispatch(postSlice.actions.postsFetchingByIdSuccess(response.data));
        console.log(response.data);
    }
    catch (error) {
        dispatch(postSlice.actions.postsFetchingError((error as Error).message));
    }
}

/* export const addPost = (dispatch: AppDispatch, title: string, body: string) => {
    dispatch(postSlice.actions.addPost({id: Date.now(), title, body}))
}  */