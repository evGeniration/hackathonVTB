import { Document } from 'mongoose';
import * as mongoose from "mongoose";
import { Role } from "../role/role.schema";
export declare type UserDocument = User & Document;
export declare class User {
    login: string;
    password: string;
    role: Role;
}
export declare const UserSchema: mongoose.Schema<Document<User, any, any>, mongoose.Model<Document<User, any, any>, any, any, any>, {}>;
