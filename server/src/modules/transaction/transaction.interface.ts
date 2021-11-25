import * as mongoose from 'mongoose';
export interface Transaction { 
  date: Date;
  transactionName: String;
  debit: Boolean;
  credit: Boolean;
  totalAmount: Number;
  id: [
      {
          type: mongoose.Schema.Types.ObjectId, ref: 'User'
      }
  ]

}