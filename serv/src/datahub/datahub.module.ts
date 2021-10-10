import {Module} from "@nestjs/common";
import {DatahubController} from "./datahub.controller";
import {DatahubService} from "./datahub.service";


@Module({
    controllers:[DatahubController],
    providers:[DatahubService]
})

export class DatahubModule{}
