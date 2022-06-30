import { FC } from 'react';
import { IPost } from '../../../../tools/models/IPost';
import MyButton from '../../../UI/MyButton/MyButton';
import ava from './../../../../tools/images/ava.png';
import classes from './Posts.module.css';

interface PostProps {
    post: IPost
}

const Post: FC<PostProps> = ({post}) => {
    return (
        <div>
            <div className={classes.post}>
                <img src={ava} className={classes.ava} />
                <div>
                    <div className={classes.title}>{post.title}</div>
                    <div className={classes.body}>{post.body}</div>
                </div>
            </div>
        </div>
    );
};
export default Post;