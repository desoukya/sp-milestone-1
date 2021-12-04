import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@sp/schemas';
import { Model } from 'mongoose';
import { AuthDto } from '../auth/dtos/auth.dto';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(dto:AuthDto):Promise <any>{
    return await this.userModel.findOne({ email: dto.email, password: dto.password }).exec();
  }
 
}
