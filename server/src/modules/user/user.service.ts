import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@sp/schemas';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(userFilterQuary: FilterQuery<User>): Promise<User>{
    return this.userModel.findOne(userFilterQuary);
  }
}
