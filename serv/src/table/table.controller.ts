import {Controller, Get, Param, Post} from "@nestjs/common";
import {ObjectId} from "mongoose";
import {TableService} from "./table.service";


@Controller('/table')
export class TableController{
    constructor(private  tableService:TableService) {
    }
    @Post()
    createTable(file){
        console.log(file)
        return 'pososi'
        return this.tableService.createTable(file)
    }
    @Get(':id')
    getTableByTd(@Param('id')id :ObjectId){
        return this.tableService.getTableByTd(id)
    }
}
