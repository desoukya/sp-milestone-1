import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
  Date: {
    type: Date,
    required: true,
  },
  transactionName: {
    type: String,
    required: true
  },
  debit: {
    type: Boolean,
    required: true
  },
  credit: {
    type: Boolean,
    required: true
  },
  totalAmount: {
    type: Number,
    required : true
  },
  accountNumber: {
    type: Number,
    
  }

});