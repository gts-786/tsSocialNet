import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../Error';
import Hello from '../Hello';
import Login from '../Login/Login';
import classes from './Content.module.css'
import Dialogs from './Messages/Dialogs/Dialogs';
import Messages from './Messages/Messages';
import Photos from './Photos/Photos';
import PostIdPage from './Profile/Posts/PostIdPage';
import Profile from './Profile/Profile';

const Content:FC = () => {
    const isAuth = false;
    return (
        isAuth ?
        <div className={classes.content}>
            <Routes>
                <Route path='/profile/' element={<Profile/>}/>
                <Route path='profile'>
                    <Route path=':id' element={<PostIdPage/>}/>
                </Route>
                <Route path='/messages/' element={<Messages/>}/>
                <Route path='/photos' element={<Photos/>} />
                <Route path='/messages/roman' element={<Dialogs/>}/>
                <Route path='*' element={<Error/>}/> 
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