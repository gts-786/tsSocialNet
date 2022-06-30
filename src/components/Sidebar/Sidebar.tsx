import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div><NavLink to='/profile' className={ n => n.isActive ? classes.active : classes.ref }>Profile</NavLink></div>
            <div><NavLink to='/messages' className={ n => n.isActive ? classes.active : classes.ref }>Messages</NavLink></div>
            <div><NavLink to='/news' className={ n => n.isActive ? classes.active : classes.ref }>News</NavLink></div>
        </div>
    );
};
export default Sidebar;
