import * as mongoose from 'mongoose';
export interface Transaction { 
  date: Date;
  transactionName: String;
  credit:  Boolean;
  debit: Boolean;
  totalAmount: Number;
  id: [
      {
          type: Number
      }
  ]

}