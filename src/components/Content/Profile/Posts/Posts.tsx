import { FC } from 'react';
import classes from './Posts.module.css';
import { useAppDispatch, useAppSelector } from '../../../../tools/hooks/redux';
import PostForm from './PostForm';
import { IPost } from '../../../../tools/models/IPost';
import Post from './Post';
import MyButton from '../../../UI/MyButton/MyButton';
import { postSlice } from '../../../../redux/PostSlice';

interface PostsProps {
    posts: IPost[],
}

const Posts: FC<PostsProps> = () => {
    const { posts, isLoading, error } = useAppSelector(state => state.postReducer);
    const dispatch = useAppDispatch();

    return (
        <div className={classes.posts}>
            {isLoading && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {posts.length === 0
                ?
                <h2>Постов нет</h2>
                : <div> <h3 style={{ textAlign: 'center' }}>My posts</h3>
                    {posts.map((post) =>
                        <div key={post.id}>
                            <Post post={post} />
                            <MyButton onClick={() => {
                                dispatch(postSlice.actions.removePost(post));
                            }}>Remove Post</MyButton>
                        </div>)}
                </div>}
            <PostForm />
        </div>
    );
};
export default Posts;