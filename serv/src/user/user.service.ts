import {Delete, Injectable, Param} from "@nestjs/common";
import {User, UserDocument} from "./user.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {CreateUserDto} from "./create-user.dto";


@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(dto:CreateUserDto):Promise<User>{
        const user=await this.userModel.create(dto)
        return user
    }

    async getUserById(id:ObjectId):Promise<User>{
        const user=await this.userModel.findById(id)
        return user
    }

    async getAll():Promise<User[]>{
        const users=await this.userModel.find()

        return users
    }
    async getRegisterUser(dto:CreateUserDto):Promise<User>{
        const {login,password}=dto
        const user=await this.userModel.find({login, password})
        return user[0]
    }

    async deleteUserById(id:ObjectId):Promise<string>{
        await this.userModel.findByIdAndDelete(id)
        return "Successes delete "+ id
    }
}
