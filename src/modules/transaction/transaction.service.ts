import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction,TransactionDocument } from '@sp/schemas';
import { Model, ObjectId } from 'mongoose';
import internal from 'stream';
import { TransactionDto } from './dto/transaction.dto';


@Injectable()
export class TransactionService {
  // TODO: Define your Transaction Service Logic

  //getTrancation(takes the accountId)
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}

  /**
   * Returns all users from mongo database
   */

   getTrancation(accountid:string): Promise<Transaction[]> {
    return this.transactionModel.find({accountid:accountid}).exec();
   }


  getAll():any{
    return this.transactionModel.find().exec(); 
   }

  
  createTransaction(dto: TransactionDto):Promise<Transaction>{     
    const newTransaction = new this.transactionModel(dto);
    return newTransaction.save();  
  }
  
  

}