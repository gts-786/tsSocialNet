import axios from "axios";

export default class QueryPhotos {
    static async getAll() {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/photos?albumId=1'
        )
        return response.data;
    }
}