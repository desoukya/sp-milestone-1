import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema'
import * as mongoose from 'mongoose';


@Schema()
export class Transaction {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  transactionName: String;

  @Prop({ required: true })
  debit: Number;

  @Prop({ required: true })
  credit: Number;

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