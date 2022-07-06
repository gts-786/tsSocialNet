import { useAppSelector } from "../../../../tools/hooks/redux";
import FriendItem from "./FriendItem/FriendItem";

const Friends = () => {
    const {friends} = useAppSelector(state => state.friendReducer) 
    return (
        <div>
            {friends.map((friend) => <FriendItem friend={friend}/>)}
        </div>
    );
};
export default Friends;