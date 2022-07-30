import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IPhoto } from "../../../tools/models/IPhoto";

interface PhotoItemProps {
    photo: IPhoto;
}

const PhotoItem: FC<PhotoItemProps> = ({photo}) => {
    const router = useNavigate()
    return (
        <div>
            <img style={{cursor: 'pointer'}} src={photo.thumbnailUrl} alt='square' 
            onClick={()=>router(`/photos/${photo.id}`)} /> 
            <br/>{photo.title} 
        </div>
    );
};
export default PhotoItem;