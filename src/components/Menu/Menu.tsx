import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.module.css'

const Menu: FC = () => {
    return (
        <div className={classes.menu}>
            <NavLink to='/profile' className={ n => n.isActive ? classes.active : classes.ref }>Profile </NavLink>
            <NavLink to='/friends' className={ n => n.isActive ? classes.active : classes.ref }>Friends </NavLink>
            <NavLink to='/photos' className={ n => n.isActive ? classes.active : classes.ref }>Photos</NavLink>
        </div>
    );
};
export default Menu;