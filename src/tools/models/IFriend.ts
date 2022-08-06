import { IMessage } from './IMessage';
import { IPost } from './IPost';
export interface IFriend {
    id: number;
    name: string;
    surname: string;
    city: string;
    age: number;
    image: string;
    messages: IMessage[];
    posts: IPost[];
}