import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <div>Сделать форму авторизации</div>
            <div>Сделать переходы по id с постом на страницу юзера с этим айди+фото</div>
            <div>Сделать списки пользователей для сообщений и открытия окна диалогов с ними</div>
            <div>Сделать интернет-магазин и чат</div>
            <div>Добавить максимум типизации+фото в диалогах и профиле</div>
        </div>
    );
};
export default Header;