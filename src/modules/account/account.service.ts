import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account, AccountDocument, Transaction, TransactionSchema } from '@sp/schemas';
import { Model } from 'mongoose';
import { AccountDto } from './dtos/account.dto';
import { TransactionService } from '../transaction/transaction.service';
import { AccountController } from './account.controller';
import { TransactionModule } from '../transaction/transaction.module';
import { isNumber } from 'class-validator';


@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>, private transactionService: TransactionService) { }
  /**
   * Returns all accounts from mongo database
   */
  // findAll(): Promise<Account[]> {
  //   return this.accountModel.find().exec();
  // }

  /**
   *  Returns all account that has the userid, expects userid a parameter
   */
  findAccounts(uid: string): Promise<Account[]> {
    return this.accountModel.find({ userid: uid }).exec();
  }
  async calculateBalance(accountId: string): Promise<any> {
    //get all transactions for account
    const transaction: Transaction[] =
      await this.transactionService.getTrancation(accountId);

    //get all positive numbers
    const plus = transaction.reduce((acc, num) => {
      if (num.credit) acc.push(num.credit);
      return acc;
    }, []);

    //get all negative numbers
    const minus = transaction.reduce((acc, num) => {
      if (!num.credit) acc.push(num.debit);
      return acc;
    }, []);

    //sum
    let total = 0;
    total += plus.reduce((acc, num) => {
      return acc + num;
    }, 0);

    //subtract
    total += plus.reduce((acc, num) => {
      return acc - num;
    }, 0);

    //return total
    return total;

  }

  /**
   *userId 
   *
   */
  createAccount(userid: string): Promise<Account> {
    const createdAccount = new this.accountModel({ "userid": userid, "status": "active" });
    return createdAccount.save();
  }

}