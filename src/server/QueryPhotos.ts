import axios from "axios";

export default class QueryPhotos {
    static async getAll() {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/photos'
            )
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}