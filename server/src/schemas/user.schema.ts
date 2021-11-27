import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ExecSyncOptionsWithStringEncoding, SpawnSyncOptionsWithBufferEncoding } from 'child_process';
import { Document, Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

export const UserSchema = new mongoose.Schema({
  name:{type: String, required: true},
  email:{type: String, required: true},
  pawword:{type: String, required: true},

});

export interface User {
    name: string;
    email: string;
    password: string;
}
