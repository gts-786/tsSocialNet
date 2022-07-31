import { FC } from "react";
import { IFriend } from "../../../../../tools/models/IFriend";
import FriendProfile from "../../FriendProfile/FriendProfile";

interface FriendsProfileItemProps {
    friends: IFriend[];
}

const FriendsProfileItem: FC<FriendsProfileItemProps> = ({friends}) => {
    const openMessageFunc = () => {
        for (let i = 0; i < friends.length; i++) {
            let userName = friends[i].name;
            if (window.location.pathname===`/friends/${userName}`){
                return (friends[i])
            }
        }
    }
    let profileUser = openMessageFunc();
    return (
        <div>
            <FriendProfile profileUser={profileUser}/>
        </div>
    );
};
export default FriendsProfileItem;