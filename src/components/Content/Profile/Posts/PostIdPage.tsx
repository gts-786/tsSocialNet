import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsById } from "../../../../redux/ActionCreator";
import { useAppDispatch, useAppSelector } from "../../../../tools/hooks/redux";
import { IPost } from "../../../../tools/models/IPost";

const PostIdPage: FC = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const { post, isLoading, error } = useAppSelector(state => state.postReducer);
    
    useEffect(() => {
        dispatch(fetchPostsById(post.id));
    }, [])
    return (
        <div>
            {post.id}. {post.title} Привет
        </div>
    );
};
export default PostIdPage;