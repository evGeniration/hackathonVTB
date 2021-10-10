import { SampledataService } from "./sampledata.service";
export declare class SampledataController {
    private sampledataService;
    constructor(sampledataService: SampledataService);
    getTableByTd(urn: String): void;
}
