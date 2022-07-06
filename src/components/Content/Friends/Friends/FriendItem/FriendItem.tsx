import { FC } from "react";
import { IFriend } from "../../../../../tools/models/IFriend";
import classes from "./FriendItem.module.css";

interface FriendItemProps {
    friend: IFriend;
}
const FriendItem: FC<FriendItemProps> = ({ friend }) => {
    return (
        <div className={classes.item}>
            <div><img src={friend.image} className={classes.img} /></div>
            <div className={classes.friend}>
                <div className={classes.name}>{friend.name}</div>
                <div className={classes.city}>{friend.city}</div>
                <div>{friend.age} years</div>
            </div>
        </div>
    );
};
export default FriendItem;