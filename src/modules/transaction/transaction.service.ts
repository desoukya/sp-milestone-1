import { Injectable } from '@nestjs/common';
import internal from 'stream';

@Injectable()
export class TransactionService {
  // TODO: Define your Transaction Service Logic

  //getTrancation(takes the accountId)
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Returns all users from mongo database
   */
   getTrancation(accountid:string): Promise<Transaction[]> {
    return this.userModel.find().exec();
  }

  
  PostTransaction(Display_date: string, name: string, debit: number, credit: number, amount: number, accountid: string): any {
    return this.transactionModel.insert({Display_date: Display_date, name: name, debit: debit, credit: credit, amount:amount, accountid: accountid});
  }

}