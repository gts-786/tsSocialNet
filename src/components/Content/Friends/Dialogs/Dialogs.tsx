import { useAppSelector } from "../../../../tools/hooks/redux";
import FormMessage from "./FormMessage";
import classes from "./Dialogs.module.css";
import { FC } from "react";

interface DialogsProps {
    dialogUser: any;
}

const Dialogs: FC<DialogsProps> = ({dialogUser}) => {
    const { messages } = useAppSelector(state => state.messageReducer)
    return (
        <div className={classes.dialogs}>
            <div>
                <img src={dialogUser.image} alt="Picture" className={classes.img} />
                <div>{dialogUser.name}</div>
            </div>
            <div>
                {messages.map(message => <div key={message.id}>{message.message}</div>)}
            </div>
            <div></div>
            <div>
                <FormMessage/>
            </div>      
        </div>
    );
};
export default Dialogs;