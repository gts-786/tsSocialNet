import { FC, useEffect, useState } from 'react';
import classes from './Posts.module.css';
import { useAppDispatch, useAppSelector } from '../../../../tools/hooks/redux';
import PostForm from './PostForm';
import { IPost } from '../../../../tools/models/IPost';
import Post from './Post';
import MyButton from '../../../UI/MyButton/MyButton';
import { postSlice } from '../../../../redux/PostSlice';
import { fetchPosts } from '../../../../redux/ActionCreator';
import { getPagesArray } from '../../../../tools/pages';

interface PostsProps {
    posts: IPost[],
}

const Posts: FC<PostsProps> = () => {
    const { posts, isLoading, error } = useAppSelector(state => state.postReducer);
    const dispatch = useAppDispatch();
    const [totalPages, setTotalPages] = useState<number>(2);
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(0);
    let pagesArray: number[] = getPagesArray(totalPages);

    const changePage = (page: number) => {
        setPage(page);
    }
    useEffect(() => {
        dispatch(fetchPosts(limit, page, setTotalPages));
    }, [ page ]);

    return (
        <div className={classes.posts}>
            {isLoading && <h1>Loading...</h1>}
            {pagesArray.map(n =>
                <MyButton key={n} onClick={() => { changePage(n) }}>{n}</MyButton>)}
            {error && <h2>{error}</h2>}
            {posts.length === 0
                ?
                <h2>Постов нет</h2>
                : <div>
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