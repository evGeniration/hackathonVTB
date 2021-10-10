import { Model, ObjectId } from "mongoose";
import { CreateRoleDto } from "./create-role.dto";
import { Role, RoleDocument } from "./role.schema";
export declare class RoleService {
    private roleModel;
    constructor(roleModel: Model<RoleDocument>);
    createRole(dto: CreateRoleDto): Promise<Role>;
    deleteRole(id: ObjectId): Promise<string>;
    getAllRoles(): Promise<Role[]>;
}
