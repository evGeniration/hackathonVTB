import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, ObjectId} from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
    @Prop()
    name: string;

    @Prop()
    datasetArr: ObjectId[];

}

export const RoleSchema = SchemaFactory.createForClass(Role);
