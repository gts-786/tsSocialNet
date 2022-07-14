import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { authSlice } from '../../redux/AuthSlice';
import { useAppDispatch } from '../../tools/hooks/redux';
import classes from './Header.module.css';

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const logout = () => {
        dispatch(authSlice.actions.falseAuth());
        localStorage.removeItem('auth');
    }
    return (
        <div className={classes.header}>
            <div>Навести красоту</div>
            <div>Сделать интернет-магазин и чат</div>
            <div>Типизация Header, Login, Friends, Photos</div>
            <NavLink to='/' onClick={logout}>LogOut</NavLink>
        </div>
    );
};
export default Header;