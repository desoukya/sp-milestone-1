import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@sp/schemas';
import { Model } from 'mongoose';
import passport from 'passport';
import {UserDto} from './dtos/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


  
  /**
   * Returns all users from mongo database
   */
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  createUser(dto: UserDto):Promise<User>{
     
    const newUser = new this.userModel(dto);
    return newUser.save();  
  }

}
