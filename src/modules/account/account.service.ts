import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account,AccountDocument } from '@sp/schemas';
import { Model } from 'mongoose';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.userid) private accountModel: Model<AccountDocument>) {}

  /**
   * Returns all users from mongo database
   */
  findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }
}
