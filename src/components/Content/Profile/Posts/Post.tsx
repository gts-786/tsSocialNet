import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../../../../tools/models/IPost';
import ava from './../../../../tools/images/ava.png';
import classes from './Posts.module.css';

interface PostProps {
    post: IPost
}

const Post: FC<PostProps> = ({post}) => {
    const router = useNavigate()
    return (
        <div>
            <div className={classes.post} onClick={()=>router(`/profile/${post.id}`)}>
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