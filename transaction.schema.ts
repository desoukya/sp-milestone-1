import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type transcationsDocument = transcations & Document;

/*
  The @Schema() decorator marks a class as a schema definition. 
  It maps the User class to a MongoDB collection of the same name, 
  but with an additional “s” at the end - so the final mongo collection
  name will be users.

  For additional info, visit: https://docs.nestjs.com/techniques/mongodb
*/
@Schema()
export class transcations {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  account: string;
}

export const transcationsSchema = SchemaFactory.createForClass(transcations);