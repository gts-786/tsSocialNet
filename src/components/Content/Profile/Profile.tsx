import { FC } from 'react';
import classes from './Profile.module.css';
import ava from './../../../tools/images/ava.png'
import Description from './Description/Description';
import Posts from './Posts/Posts';

const Profile: FC = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.photo}><img src={ava} alt="ava" /></div>
            <Description />
            <Posts posts={[]}/>
        </div>
    );
};
export default Profile;