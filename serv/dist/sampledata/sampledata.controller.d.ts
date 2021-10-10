import { SampledataService } from "./sampledata.service";
export declare class SampledataController {
    private sampledataService;
    constructor(sampledataService: SampledataService);
    getSampleData(body: any): {
        table: any[];
    };
}
