import { UserService } from "./user.service";
import { CreateUserDto } from "./create-user.dto";
import { ObjectId } from "mongoose";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(dto: CreateUserDto): Promise<import("./user.schema").User>;
    getAll(): Promise<import("./user.schema").User[]>;
    getUserById(id: ObjectId): Promise<import("./user.schema").User>;
    getRegisterUser(dto: CreateUserDto): Promise<{
        user: import("./user.schema").User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        exist: boolean;
    } | {
        exist: boolean;
        user?: undefined;
    }>;
    deleteUserById(id: ObjectId): Promise<string>;
}
