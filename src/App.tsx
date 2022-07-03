import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { authSlice } from './redux/AuthSlice';
import { useAppDispatch, useAppSelector } from './tools/hooks/redux';

function App() {
  const {isAuth} = useAppSelector(state=>state.authReducer);
  const dispatch = useAppDispatch();
  useEffect(() =>{
    if (localStorage.getItem('auth')) {
      dispatch(authSlice.actions.trueAuth());
    }
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
