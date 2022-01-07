import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Account, AccountDocument} from 'src/schemas/account.schema';
import { Transaction } from "src/schemas/transaction.schema";
import { Model } from "mongoose";
import { TransactionService } from "../transaction/transaction.service";


@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
    private transactionService: TransactionService
  ) {}


  /**
   * Gets all accounts in the mongo database
   * @returns all accounts in the "accounts" mongo database
   */

  async findAll(): Promise<Account[]> {
    return await this.accountModel.find().exec();
  }

  /**
   * Gets all accounts in the mongo database that has userid===userid
   * @param userid attribute in the body of accounts
   * @return all accounts in the "accounts" mongo database with userid equals the given param(userid)
   */

  async findAccounts(uid: string): Promise<Account[]> {
    return await this.accountModel.find({ userid: uid }).exec();
  }

  /**
   * Creates an account in the mongo database using userid with added random numbers before and 
   * after it to reduce the possiblity of duplicate values of accountid
   * @param userid for the account to be created with
   * @return the created account
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
}