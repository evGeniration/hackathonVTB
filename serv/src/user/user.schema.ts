import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, ObjectId} from 'mongoose';
import * as mongoose from "mongoose"
import {Role} from "../role/role.schema";
export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    login: string;

    @Prop()
    password: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
    role:Role;

}

export const UserSchema = SchemaFactory.createForClass(User);
