import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsById } from "../../../../redux/ActionCreator";
import { useAppDispatch } from "../../../../tools/hooks/redux";
import { IPost } from "../../../../tools/models/IPost";
import Loader from "../../../UI/Loader/Loader";

const PostIdPage: FC = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const [post, setPost] = useState({id: null, title: '', body: ''})
    const fetchPostId = async () => {
        const response = await dispatch(fetchPostsById(params.id));
        setPost(response)
    }

    useEffect(() => {
        fetchPostId()
    }, [])
    return (
        <div>
            {post.id}. {post.title} <br/> {post.body}
        </div>
    );
};
export default PostIdPage;