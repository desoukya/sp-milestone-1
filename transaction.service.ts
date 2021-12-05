<<<<<<< Updated upstream
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {transcations, transcationsDocument } from './transaction.schema';
import { Model } from 'mongoose';
import { Transactiondata } from './transaction.data';


@Injectable()
export class transactionService {
  constructor(@InjectModel(transcations.name) private transcationsModel: Model<transcationsDocument>) {}

  /**
   * Returns all users from mongo database
   */
    getTranscation(accountid:string): Promise<any[]> {
    return this.transcationsModel.find({accountid:accountid}).exec();
   }

  findAll(): Promise<any> {
    return this.transcationsModel.find().exec();
  }
  createTransaction(data: Transactiondata):Promise<transcations>{     
    const newTransaction = new this.transcationsModel();
    return newTransaction.save();  
  }
}
=======
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {transcations, transcationsDocument } from './transaction.schema';
import { Model } from 'mongoose';
import { Transactiondata } from './transaction.data';


@Injectable()
export class transactionService {
  constructor(@InjectModel(transcations.name) private transcationsModel: Model<transcationsDocument>) {}

  /**
   * Returns all users from mongo database
   */
    getTranscation(accountid:string): Promise<any[]> {
    return this.transcationsModel.find({accountid:accountid}).exec();
   }

  findAll(): Promise<any> {
    return this.transcationsModel.find().exec();
  }
  createTransaction(data: Transactiondata):Promise<transcations>{     
    const newTransaction = new this.transcationsModel();
    return newTransaction.save();  
  }
}
>>>>>>> Stashed changes
