import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: true,
        unique: false
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