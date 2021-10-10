import { ObjectId } from "mongoose";
export declare class CreateRoleDto {
    readonly name: string;
    readonly datasetArr: ObjectId[];
}
