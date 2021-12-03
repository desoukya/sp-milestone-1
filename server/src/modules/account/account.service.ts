import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  Account,
  AccountDocument,
  Transaction,
  TransactionSchema,
} from "@sp/schemas";
import { Model } from "mongoose";
import { AccountDto } from "./dtos/account.dto";
import { TransactionService } from "../transaction/transaction.service";
import { AccountController } from "./account.controller";
import { TransactionModule } from "../transaction/transaction.module";
import { isNumber } from "class-validator";

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
    private transactionService: TransactionService
  ) {}
  /**
   * Returns all accounts from mongo database
   */
  async findAll(): Promise<Account[]> {
    return await this.accountModel.find().exec();
  }

  /**
   *  Returns all account that has the userid, expects userid a parameter
   */
  async findAccounts(uid: string): Promise<Account[]> {
    return await this.accountModel.find({ userid: uid }).exec();
  }

  /**
   *userId
   *
   */
  createAccount(userid: string): Promise<Account> {
    const newId = (Math.floor(Math.random() * 50) + 1).toString();
    const newId2 = (Math.floor(Math.random() * 17) + 1).toString();
    const createdAccount = new this.accountModel({
      userid: userid,
      status: "active",
      accountid: newId + userid + newId2,
    });
    return createdAccount.save();
  }

  async calculateBalance(accountId: string): Promise<any> {
    //get all transactions for account
    const transaction: Transaction[] =
      await this.transactionService.getTrancation(accountId);

    const total = transaction.reduce((acc, transaction) => {
      var value = transaction.credit
        ? transaction.amount
        : transaction.amount * -1;
      return acc + value;
    }, 0);
    return total;
  }
}
