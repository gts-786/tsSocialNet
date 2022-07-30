import { FC } from "react";
import { useAppSelector } from "../../../../tools/hooks/redux";
import FriendItem from "./FriendItem/FriendItem";

const Friends: FC = () => {
    const {friends} = useAppSelector(state => state.friendReducer) 
    return (
        <div>
            {friends.map((friend) => <FriendItem key={friend.id} friend={friend}/>)}
        </div>
    );
};
export default Friends;