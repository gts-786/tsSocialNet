import FormMessage from "./FormMessage";
import classes from "./Dialogs.module.css";
import { FC } from "react";

interface DialogsProps {
    dialogUser: any;
}

const Dialogs: FC<DialogsProps> = ({dialogUser}) => {
    return (
        <div className={classes.dialogs}>
            <div>
                <img src={dialogUser.image} alt="Picture" className={classes.img} />
                <div>{dialogUser.name}</div>
            </div>
            <div>
            {dialogUser.messages.length === 0
                ?
                <h4>Сообщений нет</h4>
                :
                dialogUser.messages.map((message: any) => <div key={message.id}>{message.message}</div>)}
            </div>
            <div></div>
            <div className={classes.form}>
                <FormMessage/>
            </div>      
        </div>
    );
};
export default Dialogs;