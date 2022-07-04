import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Error from './components/Error';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { authSlice } from './redux/AuthSlice';
import { useAppDispatch, useAppSelector } from './tools/hooks/redux';

function App() {
  const { isAuth } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(authSlice.actions.trueAuth());
    }
  }, [])
  return (
    isAuth ?
      <BrowserRouter>
        <div className="App">
          <Header />
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
      :
      <BrowserRouter>
        <div className="AppAuth">
          <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<Error />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
