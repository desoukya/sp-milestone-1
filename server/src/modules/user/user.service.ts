import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@sp/schemas';
<<<<<<< Updated upstream
import { FilterQuery, Model } from 'mongoose';
=======
import { Model } from 'mongoose';
import { AuthDto } from '../auth/dtos/auth.dto';

>>>>>>> Stashed changes

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

<<<<<<< Updated upstream
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(userFilterQuary: FilterQuery<User>): Promise<User>{
    return this.userModel.findOne(userFilterQuary);
  }
=======
  /**
   * Returns all users from mongo database
   */
  
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async find(dto:AuthDto):Promise<User>{
    return await this.userModel.findOne({ email: dto.email, password: dto.password}).exec();
  }


>>>>>>> Stashed changes
}
