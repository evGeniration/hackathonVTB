import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./create-user.dto";
import {ObjectId} from "mongoose";


@Controller('/user')
export class UserController{
    constructor(private userService:UserService) {
    }

    @Post()
    createUser(@Body() dto:CreateUserDto){
        return this.userService.createUser(dto)
    }
    @Get('/all')
    getAll(){
        return this.userService.getAll()
    }
    @Get(':id')
    getUserById(@Param('id') id:ObjectId){
        return this.userService.getUserById(id)
    }

    @Post('isregistred')
    getRegisterUser(@Body() dto:CreateUserDto){
        return this.userService.getRegisterUser(dto)
    }
    @Delete(':id')
    deleteUserById(@Param('id') id:ObjectId){
        return this.userService.deleteUserById(id)
    }
}
