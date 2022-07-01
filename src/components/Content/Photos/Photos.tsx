import axios from "axios";
import { useEffect, useState } from "react";
import QueryPhotos from "../../../server/QueryPhotos";
import { useFetching } from "../../../tools/hooks/useFetching";
import { IPhoto } from "../../../tools/models/IPhoto";
import Loader from "../../UI/Loader/Loader";
import PhotoItem from "./PhotoItem";
import classes from "./Photos.module.css"

const Photos = () => {
    const [photos, setPhotos] = useState<IPhoto[]>([])
    const [fetchPhotos, isPhotosLoading, photosError] = useFetching(async () => {
        const photos = await QueryPhotos.getAll();
        setPhotos(photos);
    })
    useEffect(() => {
        fetchPhotos();
    }, [])
    return (
        <div className={classes.photos}>
            {isPhotosLoading ? <Loader/> : <></>}
            {photosError && <h2>Fail - {photosError}</h2>}
            {photos.map((photo)=><PhotoItem key={photo.thumbnailUrl} photo={photo}/>)}
        </div>
    );
};
export default Photos;