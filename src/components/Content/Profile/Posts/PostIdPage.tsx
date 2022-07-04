import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsById } from "../../../../redux/ActionCreator";
import { useAppDispatch } from "../../../../tools/hooks/redux";

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
            <h2>Post {post.id}. <br/>{post.title}</h2> <br/> {post.body}
        </div>
    );
};
export default PostIdPage;