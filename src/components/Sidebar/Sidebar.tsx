import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'

const Sidebar: FC = () => {
    return (
        <div className={classes.sidebar}>
            <div><NavLink to='/profile' className={ n => n.isActive ? classes.active : classes.ref }>Profile</NavLink></div>
            <div><NavLink to='/friends' className={ n => n.isActive ? classes.active : classes.ref }>Friends</NavLink></div>
            <div><NavLink to='/photos' className={ n => n.isActive ? classes.active : classes.ref }>Photos</NavLink></div>
        </div>
    );
};
export default Sidebar;