import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: true,
    },
    accountNumber: {
        type: Number,
        unique: true,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default : true
    },
    id: {
        type: Number,
        //type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }

});