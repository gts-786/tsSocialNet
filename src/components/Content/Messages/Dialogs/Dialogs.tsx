import { useAppSelector } from "../../../../tools/hooks/redux";
import FormMessage from "./FormMessage";
import ava from "./../../../../tools/images/ava.png";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    const { messages } = useAppSelector(state => state.messageReducer)
    return (
        <div className={classes.dialogs}>
            <div>
                <img src={ava} alt="Picture" className={classes.img} />
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