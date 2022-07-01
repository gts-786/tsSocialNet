import { FC } from "react";
import { IPhoto } from "../../../tools/models/IPhoto";

interface PhotoItemProps {
    photo: IPhoto;
}

const PhotoItem: FC<PhotoItemProps> = ({photo}) => {
    return (
        <div>
            <img src={photo.thumbnailUrl} alt='picture' /> <br/>{photo.title} 
        </div>
    );
};
export default PhotoItem;