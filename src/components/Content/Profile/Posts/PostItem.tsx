import { useNavigate } from "react-router-dom";
import MyButton from "../../../UI/MyButton/MyButton";

const PostItem = (props:any) => {
    const router = useNavigate()
    return (
        <div>
            {props.post.id}. {props.post.title}
            <MyButton onClick={()=>router(`/profile/${props.post.id}`)} >Open</MyButton>
        </div>
    );
};
export default PostItem;