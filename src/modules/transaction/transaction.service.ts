import { Injectable } from '@nestjs/common';

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
}