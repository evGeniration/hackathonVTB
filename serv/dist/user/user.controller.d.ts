import { UserService } from "./user.service";
import { CreateUserDto } from "./create-user.dto";
import { ObjectId } from "mongoose";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(dto: CreateUserDto): Promise<import("./user.schema").User>;
    getAll(): Promise<import("./user.schema").User[]>;
    getUserById(id: ObjectId): Promise<import("./user.schema").User>;
    getRegisterUser(dto: CreateUserDto): Promise<import("./user.schema").User>;
    deleteUserById(id: ObjectId): Promise<string>;
}
