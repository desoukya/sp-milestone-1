import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

/*
  The @Schema() decorator marks a class as a schema definition. 
  It maps the User class to a MongoDB collection of the same name, 
  but with an additional “s” at the end - so the final mongo collection
  name will be users.

  For additional info, visit: https://docs.nestjs.com/techniques/mongodb
*/
@Schema()
export class User {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  username: String;

  @Prop({ required: true })
  email: String;

  @Prop({ required: true })
  password: String;

  @Prop({ required: true })
  phone: Number;

  @Prop({ required: true })
  id: Number;

  @Prop({ required: true, default: 100 })
  balance: Number;
}


export const UserSchema = SchemaFactory.createForClass(User);