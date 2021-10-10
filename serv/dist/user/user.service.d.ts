import { User, UserDocument } from "./user.schema";
import { Model, ObjectId } from "mongoose";
import { CreateUserDto } from "./create-user.dto";
import { RoleDocument } from "../role/role.schema";
export declare class UserService {
    private userModel;
    private roleModel;
    constructor(userModel: Model<UserDocument>, roleModel: Model<RoleDocument>);
    createUser(dto: CreateUserDto): Promise<User>;
    getUserById(id: ObjectId): Promise<User>;
    getAll(): Promise<User[]>;
    getRegisterUser(dto: CreateUserDto): Promise<{
        user: User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        exist: boolean;
    } | {
        exist: boolean;
        user?: undefined;
    }>;
    deleteUserById(id: ObjectId): Promise<string>;
}
