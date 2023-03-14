import { Model } from 'sequelize-typescript';
export declare class User extends Model<User, IUser> {
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
    password: string;
    role: string;
}
