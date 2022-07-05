import { useAppSelector } from "../../../../tools/hooks/redux";

const Friends = () => {
    const {friends} = useAppSelector(state => state.friendReducer) 
    return (
        <div>
            {friends.map((friend) => <div>{friend.city} {friend.name} <img src={friend.image}/></div>)}
        </div>
    );
};
export default Friends;