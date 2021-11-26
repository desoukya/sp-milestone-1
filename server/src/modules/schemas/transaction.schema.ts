import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

/*
@Schema()
export class Transaction {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  transactionName: String;

  @Prop({ required: true })
  debit: Boolean;

  @Prop({ required: true })
  credit: Boolean;

  @Prop({ required: true })
  totalAmount: Number;

  @Prop({ required: true })
  id: [
      {
          type: mongoose.Schema.Types.ObjectId, ref: 'User'
      }
  ]
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
*/
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
  id: {
    type: Number,
    //type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true
  }

});