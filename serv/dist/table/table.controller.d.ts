import { ObjectId } from "mongoose";
import { TableService } from "./table.service";
export declare class TableController {
    private tableService;
    constructor(tableService: TableService);
    createTable(file: any): void | "pososi";
    getTableByTd(id: ObjectId): string;
}
