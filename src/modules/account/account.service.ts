import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account,AccountDocument, Transaction, TransactionSchema } from '@sp/schemas';
import { Model } from 'mongoose';
import { AccountDto } from './dtos/account.dto';
import { TransactionService } from '../transaction/transaction.service';
import { AccountController } from './account.controller';
import { TransactionModule } from '../transaction/transaction.module';


@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}
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
    return this.accountModel.find({userid:uid}).exec();
  }

  /**
   *userId 
   *
   */
   createAccount(userid: string): Promise<Account> {
     const createdAccount = new this.accountModel({"userid":userid});
      return createdAccount.save();
  }
 
}