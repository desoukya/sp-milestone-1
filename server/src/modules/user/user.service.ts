import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@sp/schemas';
import { Model } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Returns all users from mongo database
   */
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  private sanitizedUser(user: User){
   // return user.validatePassword('password');
  }
   createUser(req):any{
    const username = req;
    const user = this.userModel.findOne({username});
    if(user){
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);
    }
    const createUser = new this.userModel(req);
    createUser.save();
    return this.sanitizedUser(createUser);
    //add the users to database
  }

}
