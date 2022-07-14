import { FC } from "react";
import { IFriend } from "../../../../../../tools/models/IFriend";
import Dialogs from "../../../Dialogs/Dialogs";

interface FriendsItemMessagesProps {
    friends: IFriend[];
}
const FriendsItemMessages: FC<FriendsItemMessagesProps> = ({friends}) => {
    const openMessageFunc = () => {
        for (let i = 0; i < friends.length; i++) {
            let userName = friends[i].name;
            if (window.location.pathname===`/friends/${userName}`){
                return (friends[i])
            }
        }
    }
    let dialogUser = openMessageFunc();

    return (
        <div>
            <Dialogs dialogUser={dialogUser}/>  
        </div>
    );
};
export default FriendsItemMessages;