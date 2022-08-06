import { FC } from "react";
import { useAppSelector } from "../../../../tools/hooks/redux";
import { IPost } from "../../../../tools/models/IPost";
import classes from './Posts.module.css';

const PostIdPage: FC = () => {
    const { posts } = useAppSelector(state => state.postReducer);
    const post: IPost | undefined = posts.find(item => item.id === Number((window.location.pathname).slice(9)))

    return (
        <div>
            <img src='/images/ava.png' alt='Avatar' className={classes.ava} />
            <h4 style={{marginTop: '0'}}>Роман</h4> 
            <h2>{post?.title}</h2> <br/> {post?.body}
        </div>
    );
};
export default PostIdPage;