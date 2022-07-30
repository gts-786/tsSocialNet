import { getPageCount } from './../tools/pages';
import { IPost } from './../tools/models/IPost';
import axios from "axios";
import { postSlice } from "./PostSlice";
import { AppDispatch } from "./store";

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

export const fetchPostsById = (id: any) => async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return (response.data);
}

export const fetchPhotoById = (id: any) => async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    return (response.data);
}