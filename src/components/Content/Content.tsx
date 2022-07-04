import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../tools/hooks/redux';
import Hello from '../Common/Hello';
import Login from '../Common/Login/Login';
import classes from './Content.module.css'
import ErrorPage from './ErrorPage';
import Dialogs from './Messages/Dialogs/Dialogs';
import Messages from './Messages/Messages';
import PhotoIdPage from './Photos/PhotoIdPage';
import Photos from './Photos/Photos';
import PostIdPage from './Profile/Posts/PostIdPage';
import Profile from './Profile/Profile';

const Content:FC = () => {
    const {isAuth} = useAppSelector(state=> state.authReducer);
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
                <Route path='photos'>
                    <Route path=':id' element={<PhotoIdPage/>}/>
                </Route>
                <Route path='/messages/roman' element={<Dialogs/>}/>
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