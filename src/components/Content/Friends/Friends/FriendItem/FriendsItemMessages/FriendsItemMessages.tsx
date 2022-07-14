import { FC } from "react";
import { IFriend } from "../../../../../../tools/models/IFriend";
import FriendItem from "../FriendItem";

interface FriendsItemMessagesProps {
    friends: IFriend[];
}
const FriendsItemMessages: FC<FriendsItemMessagesProps> = ({friends}) => {
    let name = friends.map((friend) => friend.name)
    return (
        <div>
            Here Logic opening messages <br/>
            {name}
        </div>
    );
};
export default FriendsItemMessages;