import { Injectable } from '@nestjs/common';

@Injectable()
<<<<<<< Updated upstream
export class TransactionService {
  // TODO: Define your Transaction Service Logic

  //getTrancation(takes the accountId)
}
=======
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Returns all users from mongo database
   */
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
>>>>>>> Stashed changes
