import { IMessage } from './IMessage';
export interface IFriend {
    id: number;
    name: string;
    surname: string;
    city: string;
    age: number;
    image: string;
    messages: IMessage[];
}