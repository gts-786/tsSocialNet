import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from './Content.module.css'
import Dialogs from './Messages/Dialogs/Dialogs';
import Messages from './Messages/Messages';
import PostIdPage from './Profile/Posts/PostIdPage';
import Profile from './Profile/Profile';

const Content:FC = () => {
    return (
        <div className={classes.content}>
            <Routes>
                <Route path='/profile/' element={<Profile/>}/>
                <Route path='profile'>
                    <Route path=':id' element={<PostIdPage/>}/>
                </Route>
                <Route path='/messages/' element={<Messages/>}/>
                <Route path='/news'/>
                <Route path='/messages/roman' element={<Dialogs/>}/>
                <Route path='*' element={<Profile/>}/> 
            </Routes>
        </div>
    );
};
export default Content;