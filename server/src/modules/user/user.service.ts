import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dtos/user.dto';
import { User } from './user.interface';



@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) { }

  /**
   * Returns all users from mongo database
   */
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async newUser(userDto: UserDto) {
    let user = new this.userModel(userDto);
    return await user.save();
  }

  async findOneByEmail(email): Promise<User> {

    return await this.userModel.findOne({email: email});

  }
}
