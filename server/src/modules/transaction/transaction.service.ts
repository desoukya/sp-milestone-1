import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction,TransactionDocument } from "src/schemas/transaction.schema";
import { Model, ObjectId } from 'mongoose';
import internal from 'stream';
import { TransactionDto } from './dto/transaction.dto';


@Injectable()
export class TransactionService {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}
  
  async getAll():Promise<any>{
    return await this.transactionModel.find().exec(); 
  }
  
  createSenderTransaction(dto: TransactionDto):Promise<Transaction>{     
    const newTransaction = new this.transactionModel(dto);
    return newTransaction.save();  
  }
  createRecieverTransaction(sender_dto: TransactionDto):Promise<Transaction>{
    const reciever_dto:TransactionDto = {name:" ",accountid:(sender_dto).toString(),amount:sender_dto.amount,credit:1}
    const reciever_transaction = this.createSenderTransaction(reciever_dto);
    return reciever_transaction;
  }
  

}