import { FC } from "react";
import classes from './FriendProfile.module.css';

interface FriendProfileProps {
    profileUser: any
}

const FriendProfile: FC<FriendProfileProps> = ({profileUser}) => {
    return (
        <div className={classes.profile}>
            <div className={classes.photo}><img className={classes.photo} src={profileUser.image} alt="Picture" /></div>
                <div className={classes.description}>
                    <h2>{profileUser.surname} {profileUser.name}</h2>
                    <h4>Age: {profileUser.age} years</h4>
                    <h4>City: {profileUser.city}</h4>
                </div>
                <div className={classes.posts}>Posts</div>
        </div>
    );
};
export default FriendProfile;