import { NavLink } from 'react-router-dom';
import { authSlice } from '../../redux/AuthSlice';
import { useAppDispatch } from '../../tools/hooks/redux';
import MyButton from '../UI/MyButton/MyButton';
import classes from './Header.module.css';

const Header = () => {
    const dispatch = useAppDispatch();
    const logout = () => {
        dispatch(authSlice.actions.falseAuth());
        localStorage.removeItem('auth');
    }
    return (
        <div className={classes.header}>
            <div>Сделать переходы по id с постом на страницу юзера с этим айди+фото</div>
            <div>Сделать списки пользователей для сообщений и открытия окна диалогов с ними</div>
            <div>Сделать интернет-магазин и чат</div>
            <div>Добавить максимум типизации+фото в диалогах и профиле</div>
            <NavLink to='/' onClick={logout}>LogOut</NavLink>
        </div>
    );
};
export default Header;