import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


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