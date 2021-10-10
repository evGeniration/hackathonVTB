import {ObjectId} from "mongoose";

export class CreateRoleDto{
    readonly name:string;
    readonly datasetArr:ObjectId[];
}
