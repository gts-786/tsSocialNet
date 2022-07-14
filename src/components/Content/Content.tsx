import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../tools/hooks/redux';
import Hello from '../Common/Hello';
import Login from '../Common/Login/Login';
import classes from './Content.module.css'
import ErrorPage from './ErrorPage';
import FriendsItemMessages from './Friends/Friends/FriendItem/FriendsItemMessages/FriendsItemMessages';
import Friends from './Friends/Friends/Friends';
import PhotoIdPage from './Photos/PhotoIdPage';
import Photos from './Photos/Photos';
import PostIdPage from './Profile/Posts/PostIdPage';
import Profile from './Profile/Profile';

const Content:FC = () => {
    const {isAuth} = useAppSelector(state=> state.authReducer);
    const {friends} = useAppSelector(state => state.friendReducer);
    return (
        isAuth ?
        <div className={classes.content}>
            <Routes>
                <Route path='/profile/' element={<Profile/>}/>
                <Route path='profile'>
                    <Route path=':id' element={<PostIdPage/>}/>
                </Route>
                <Route path='/friends' element={<Friends/>}/>
                <Route path='friends'>
                    <Route path=':name' element={<FriendsItemMessages friends={friends}/>}/>    
                </Route>
                <Route path='/photos' element={<Photos/>} />
                <Route path='photos'>
                    <Route path=':id' element={<PhotoIdPage/>}/>
                </Route>
                <Route path='*' element={<ErrorPage/>}/> 
                <Route path='/' element={<Hello/>}/> 
            </Routes>
        </div>
        :
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<Login/>} />
        </Routes>
    );
};
export default Content;