import { RoleService } from "./role.service";
import { ObjectId } from "mongoose";
import { CreateRoleDto } from "./create-role.dto";
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    createRole(dto: CreateRoleDto): Promise<import("./role.schema").Role>;
    deleteRole(id: ObjectId): Promise<string>;
    getAllRoles(): Promise<import("./role.schema").Role[]>;
}
