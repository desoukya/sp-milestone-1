import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction,TransactionDocument } from '@sp/schemas';
import { Model } from 'mongoose';
import internal from 'stream';

@Injectable()
export class TransactionService {
  // TODO: Define your Transaction Service Logic

  //getTrancation(takes the accountId)
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}

  /**
   * Returns all users from mongo database
   */
   getTrancation(accountid:string): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  
  
  PostTransaction(
    Display_date: string,
    name: string,
    debit: number, 
    credit: number, 
    amount: number, 
    accountid: string): any {
    const createdTransaction = new this.transactionModel({Display_date: Display_date, name: name, debit: debit, credit: credit, amount:amount, accountid: accountid});
    return createdTransaction.save();
  }

  /**
   * import { TransactionDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}

  async create(dto: TransactionDto): Promise<Cat> {
    const createdTransaction = new this.TransactionModel(TransactionDto);
    return createdTransaction.save();
  }
   */

}