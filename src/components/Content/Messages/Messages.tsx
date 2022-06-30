import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MyInput from "../../UI/MyInput/MyInput";
import Addressee from "./Addressee/Addressee";
import Dialogs from "./Dialogs/Dialogs";
import classes from './Messages.module.css';

const Messages:FC = () => {
    return (
        <div className={classes.messages}>
            <Addressee/>
            <Dialogs/>
        </div>
    );
};
export default Messages;