import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IFriend } from "../../../../../tools/models/IFriend";
import classes from "./FriendItem.module.css";

interface FriendItemProps {
    friend: IFriend;
}
const FriendItem: FC<FriendItemProps> = ({ friend }) => {
    return (
        <div className={classes.item}>
            <div>
                <NavLink to={friend.name}>
                    <img src={friend.image} className={classes.img} />
                </NavLink>
            </div>
            <div className={classes.friend}>
                <div className={classes.name}>{friend.name}, {friend.age} years</div>
                <div className={classes.city}>{friend.city}</div>
            </div>
            <div className={classes.align}>
                <NavLink to={friend.name+'/Dialog'} className={classes.nav}>Messages</NavLink>
            </div>
        </div>
    );
};
export default FriendItem;