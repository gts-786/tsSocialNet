import { SetStateAction, useState } from "react";
import { friendSlice } from "../../../../redux/FriendSlice";
import { useAppDispatch } from "../../../../tools/hooks/redux";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";

const FormMessage = () => {
    const [message, setMessage] = useState<string>('')
    const dispatch = useAppDispatch()
    const sendMessage = () => {
        dispatch(friendSlice.actions.sendMessage({id: Date.now(), message}))
        setMessage('')
    }
    return (
        <div>
            <MyInput placeholder='Enter your message'
            value={message}
            onChange={(e:{target: {value: SetStateAction<string>;}}) => 
            setMessage(e.target.value)}/>
            <br/>
            <MyButton onClick={sendMessage}>Send message</MyButton>
        </div>
    );
};
export default FormMessage;