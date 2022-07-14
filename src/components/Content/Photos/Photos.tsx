import { FC, useEffect, useRef, useState } from "react";
import QueryPhotos from "../../../server/QueryPhotos";
import { useFetching } from "../../../tools/hooks/useFetching";
import { useObserver } from "../../../tools/hooks/useObserver";
import { IPhoto } from "../../../tools/models/IPhoto";
import { getPageCount } from "../../../tools/pages";
import Loader from "../../UI/Loader/Loader";
import PhotoItem from "./PhotoItem";
import classes from "./Photos.module.css"

const Photos: FC = () => {
    const [photos, setPhotos] = useState<IPhoto[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit, setLimit] = useState<number>(20)
    const [page, setPage] = useState<number>(1)
    const lastElement = useRef<any>();
    const [fetchPhotos, isPhotosLoading, photosError] = useFetching(async () => {
        const response = await QueryPhotos.getAll(limit, page);
        setPhotos([...photos, ...response.data]);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    useObserver(lastElement, page < totalPages, isPhotosLoading, () => {
        setPage(page + 1)
    })
    useEffect(() => {
        fetchPhotos();
    }, [page])
    return (
        <div>
            <h1>На данной вкладке реализован механизм бесконечной ленты с подгрузкой фото с сервера по 20 штук</h1>
            {isPhotosLoading ? <h3>Идёт загрузка...</h3> : <></>}
            {photosError && <h2>Fail - {photosError}</h2>}
            <div className={classes.photos}>
                {photos.map((photo) => <PhotoItem key={photo.thumbnailUrl} photo={photo} />)}
                {isPhotosLoading ? <Loader /> : <></>}<div ref={lastElement} />
            </div>
        </div>
    );
};
export default Photos;