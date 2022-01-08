import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction,TransactionDocument } from 'src/schemas/transaction.schema';
import { Model, ObjectId } from 'mongoose';
import { TransactionDto } from './dto/transaction.dto';
import axios from 'axios';

@Injectable()
export class TransactionService {
  // TODO: Define your Transaction Service Logic

  //getTrancation(takes the accountId)
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}


  //useGaurd
   async getTrancation(accountid:string): Promise<Transaction[]> {
    return await this.transactionModel.find({accountid:accountid}).exec();
   }


  async getAll():Promise<any>{
    return await this.transactionModel.find().exec(); 
   }

  
  createTransaction(dto: TransactionDto):Promise<Transaction>{     
    const newTransaction = new this.transactionModel(dto);
    //console.log(newTransaction)
    return newTransaction.save();
  }

  /**
   * Creates a trascation for the user who recieves an internal transfer
   * @param {TransactionDto} sender_dto The dto of the sender which contains his aid and transfer amount
   * @returns {Transaction} reciever_transaction the created transaction for the reciever
   */
  createRecieverTransaction(sender_dto: TransactionDto):Promise<Transaction>{
    const reciever_dto:TransactionDto = {accountid:(sender_dto).toString(),amount:sender_dto.amount,credit:1}
    const reciever_transaction = this.createTransaction(reciever_dto);
    return reciever_transaction;
  }
}