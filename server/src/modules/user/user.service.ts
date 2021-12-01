import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@sp/schemas';
import { Model } from 'mongoose';
import passport from 'passport';
import {UserDto} from './dtos/user.dto';
import { AuthDto } from '../auth/dtos/auth.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Console } from 'console';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}



   async findOneUser(dto:AuthDto):Promise<User>{
     
     // const yallaUser=this.userModel.find({ email: dto.email,password:dto.password}).exec();
     
      return await this.userModel.findOne({ email: dto.email,password:dto.password}).exec();
     
   }
    

  /**
   * Returns all users from mongo database
   */
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  createUser(dto: UserDto):Promise<User>{
     
    const newUser = new this.userModel(dto);
    //const newAccount = accountService.createAccount({"userid":newUser.id});
    //const newTransaction = transactionService.createTransaction({"accountid":newAccount.id});
    return newUser.save();  
  }

}
