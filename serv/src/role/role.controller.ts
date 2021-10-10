import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {RoleService} from "./role.service";
import {ObjectId} from "mongoose";
import {CreateRoleDto} from "./create-role.dto";

@Controller('/role')
export class RoleController{
    constructor(private roleService:RoleService) {  }

    @Post()
    createRole(@Body() dto:CreateRoleDto){
        return this.roleService.createRole(dto)
    }
    @Delete('/id')
    deleteRole(@Param('id') id:ObjectId){
        return this.roleService.deleteRole(id)
    }
    @Get('/all')
    getAllRoles(){
        return this.roleService.getAllRoles()
    }
    @Put(':id')
    updateRole(@Body() data,@Param('id') id:ObjectId){
        console.log(id,data)
        return this.roleService.updateRole(id,data)
    }
}
