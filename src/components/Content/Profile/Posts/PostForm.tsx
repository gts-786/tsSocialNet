import { FC, useState } from 'react';
import { postSlice } from '../../../../redux/PostSlice';
import { useAppDispatch } from '../../../../tools/hooks/redux';
import MyButton from '../../../UI/MyButton/MyButton';
import MyInput from '../../../UI/MyInput/MyInput';

const PostForm: FC = () => {
    const [post, setPost] = useState({title: '', body: ''})
    const dispatch = useAppDispatch();
    const createPost = () => {
        dispatch(postSlice.actions.addPost({id: Date.now(), title: post.title, body: post.body}))
        setPost({title: '', body: ''})
    } 

    return (
        <div>
            <MyInput
                placeholder='Write your title post'
                value={post.title}
                onChange={(e: { target: { value: any } }) => setPost({ ...post, title: e.target.value })}
            /><br />
            <MyInput
                placeholder='Write your body post'
                value={post.body}
                onChange={(e: { target: { value: any } }) => setPost({ ...post, body: e.target.value })}
            /><br />
            <MyButton onClick={createPost}>Add Post</MyButton>
        </div>
    );
};
export default PostForm;