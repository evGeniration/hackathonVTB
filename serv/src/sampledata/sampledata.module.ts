import {Module} from "@nestjs/common";
import {SampledataController} from "./sampledata.controller";
import {SampledataService} from "./sampledata.service";


@Module({
    controllers:[SampledataController],
    providers:[SampledataService]
})

export class SampledataModule{}
