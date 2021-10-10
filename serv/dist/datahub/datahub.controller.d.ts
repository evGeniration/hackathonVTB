import { DatahubService } from "./datahub.service";
export declare class DatahubController {
    private datahubService;
    constructor(datahubService: DatahubService);
    getDatasetInfo(urn: String): Promise<any>;
}
