import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import internal from 'stream';
import { InnerTDto } from './dto/InnerT.dto';
import { InnerT, InnerTDocument } from 'src/schemas/Innert.schema';


@Injectable()
export class InnerTService {
  // TODO: Define your Transaction Service Logic

  //getTrancation(takes the accountId)
  constructor(@InjectModel(InnerT.name) private InnertModel: Model<InnerTDocument>) {}

  /**
   * Returns all users from mongo database
   */

   async getTrancation(accountid:string): Promise<InnerT[]> {
    return await this.InnertModel.find({accountid:accountid}).exec();
   }


  async getAll():Promise<any>{
    return await this.InnertModel.find().exec(); 
   }

  
  createInnerT(dto: InnerTDto):Promise<InnerT>{     
    const newInnerT = new this.InnertModel(dto);
    return newInnerT.save();  
  }
}