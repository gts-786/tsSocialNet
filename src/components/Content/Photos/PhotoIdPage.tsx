import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotoById } from "../../../redux/ActionCreator";
import { useAppDispatch } from "../../../tools/hooks/redux";

const PhotoIdPage: FC = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const [photo, setPhoto] = useState({url:''});
    const fetchPhotoId = async () => {
        const response = await dispatch(fetchPhotoById(params.id))
        setPhoto(response)
    }

    useEffect (() => {
        fetchPhotoId()
    }, [])
    return (
        <div>
            <img src={photo.url} alt="picture" />
        </div>
    );
};
export default PhotoIdPage;