import {Controller, Get, Param, Post, Body} from "@nestjs/common";
import {SampledataService} from "./sampledata.service";


@Controller('/sampledata')
export class SampledataController{
    constructor(private sampledataService:SampledataService) {
    }
    /**
     * Example data:
     * 
        {
            "fields": [
                {
                    "name": "First name",
                    "type": "STRING"
                },
                {
                    "name": "Age",
                    "type": "NUMBER"
                }
            ],
            "count": 10
        }
     *
     */
    @Post()
    getSampleData(@Body() body){
        return this.sampledataService.makeTable(body.fields, body.count)
    }
}
