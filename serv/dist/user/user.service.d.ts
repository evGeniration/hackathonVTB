import { User, UserDocument } from "./user.schema";
import { Model, ObjectId } from "mongoose";
import { CreateUserDto } from "./create-user.dto";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(dto: CreateUserDto): Promise<User>;
    getUserById(id: ObjectId): Promise<User>;
    getAll(): Promise<User[]>;
    getRegisterUser(dto: CreateUserDto): Promise<User>;
    deleteUserById(id: ObjectId): Promise<string>;
}
