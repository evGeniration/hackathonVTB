import {Controller, Get, Param, Post} from "@nestjs/common";
import {DatahubService} from "./datahub.service";


@Controller('/datahub')
export class DatahubController{
    constructor(private datahubService:DatahubService) {
    }
    @Get(':urn')
    getDatasetInfo(@Param('urn')urn :String){
        return this.datahubService.getDatasetInfo(urn)
    }
}
