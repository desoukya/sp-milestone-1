import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@sp/schemas';
import { Model } from 'mongoose';
import { RegisterDTO } from '../auth/dtos/auth.dto';
@Injectable()
export class UserService {
  create: any;
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Returns all users from mongo database
   */
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  private sanitizedUser(user: any){
   return user.depopulate('password');
  }
   async createUser(userDto: RegisterDTO){
    const username = userDto;
    const user = await this.userModel.findOne({username});
    if(user){
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);
    }
    const createUser = new this.userModel(userDto);
    await createUser.save();
    return this.sanitizedUser(createUser);
    //add the users to database
  }

}
