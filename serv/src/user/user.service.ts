import {Delete, Injectable, Param} from "@nestjs/common";
import {User, UserDocument} from "./user.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {CreateUserDto} from "./create-user.dto";
import {Role, RoleDocument} from "../role/role.schema";


@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

    async createUser(dto:CreateUserDto):Promise<User>{
        const {role}=dto
        const obj=await this.roleModel.find({name:role})
        const user=await this.userModel.create({...dto,role:obj[0]._id})
        return user
    }

    async getUserById(id:ObjectId):Promise<User>{
        const user=await this.userModel.findById(id).populate('role')
        return user
    }

    async getAll():Promise<User[]>{
        const users=await this.userModel.find()
        return users
    }
    async getRegisterUser(dto:CreateUserDto){
        const {login,password}=dto
        const user=await this.userModel.find({login, password}).populate('role')
        if (Object.keys(user).length) {
        return {
            user:user[0],
            exist:true
        }
    } else {
        return { exist: false}
    }
    }

    async deleteUserById(id:ObjectId):Promise<string>{
        await this.userModel.findByIdAndDelete(id)
        return "Successes delete "+ id
    }
}
