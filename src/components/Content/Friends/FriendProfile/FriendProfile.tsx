import { FC, useEffect, useState } from "react";
import QueryPosts from "../../../../server/QueryPosts";
import { useFetching } from "../../../../tools/hooks/useFetching";
import { IPost } from "../../../../tools/models/IPost";
import classes from './FriendProfile.module.css';

interface FriendProfileProps {
    profileUser: any
}

const FriendProfile: FC<FriendProfileProps> = ({ profileUser }) => {
    //Код для запроса постов для создания красоты в приложении 
    const [posts, setPosts] = useState<IPost[]>([])
    const limit = profileUser.id * 3 - 1
    const page = profileUser.id + 1;

    const [fetchFriendPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await QueryPosts.getAll(limit, page);
        setPosts([...posts, ...response.data]);
    })
    useEffect(() => {
        fetchFriendPosts();
    }, [])

    return (
        <div className={classes.profile}>
            <div className={classes.photo}><img className={classes.photo} src={profileUser.image} alt="Picture" /></div>
            <div className={classes.description}>
                <h2>{profileUser.surname} {profileUser.name}</h2>
                <h4>Age: {profileUser.age} years</h4>
                <h4>City: {profileUser.city}</h4>
            </div>
            <div className={classes.posts}>
                {profileUser.posts.length === 0
                    ?
                    <div>
                        {isPostsLoading ? <h3>Идёт загрузка...</h3> : <></>}
                        {postsError && <h2>Fail - {postsError}</h2>}
                        {posts.map((post: IPost) =>
                            <div key={post.id}>
                                <div className={classes.post}>
                                    <img src={profileUser.image} className={classes.ava} />
                                    <div>
                                        <div className={classes.title}>{post.title}</div>
                                        <div className={classes.body}>{post.body}</div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    : <div>
                        {profileUser.posts.map((post: IPost) =>
                            <div key={post.id}>
                                <div className={classes.post}>
                                    <img src={profileUser.image} className={classes.ava} />
                                    <div>
                                        <div className={classes.title}>{post.title}</div>
                                        <div className={classes.body}>{post.body}</div>
                                    </div>
                                </div>
                            </div>)}
                    </div>}
            </div>
        </div>
    );
};
export default FriendProfile;