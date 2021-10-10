import { Document, ObjectId } from 'mongoose';
export declare type RoleDocument = Role & Document;
export declare class Role {
    name: string;
    datasetArr: ObjectId[];
}
export declare const RoleSchema: import("mongoose").Schema<Document<Role, any, any>, import("mongoose").Model<Document<Role, any, any>, any, any, any>, {}>;
