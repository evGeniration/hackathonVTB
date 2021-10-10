import {Injectable} from "@nestjs/common";
import {Model, ObjectId} from "mongoose";
import {CreateRoleDto} from "./create-role.dto";
import {Role, RoleDocument} from "./role.schema";
import {InjectModel} from "@nestjs/mongoose";


@Injectable()
export class RoleService{
    constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {
    }

    async createRole(dto:CreateRoleDto):Promise<Role>{
        const role=await this.roleModel.create(dto)
        return role
    }

    async deleteRole(id:ObjectId){
        await this.roleModel.findByIdAndDelete(id)
        return `Delete role ${id}`
    }

    async getAllRoles():Promise<Role[]>{
        const roles= await this.roleModel.find()
        return roles
    }
}
