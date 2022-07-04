import { FC } from 'react';
import classes from './MyButton.module.css';
interface MyButtonProps {
    children?: any;
    onClick?: ()=>void;
}
const MyButton: FC<MyButtonProps> = ({children, onClick, ...props}) => {
    return (
        <button {...props} className={classes.myBtn} onClick={onClick}>
            {children}
        </button>
    )
}
export default MyButton