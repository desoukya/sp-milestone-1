import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InnerTDocument = InnerT & Document;

@Schema()
export class InnerT {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  accountid: string;
}

export const InnerTSchema = SchemaFactory.createForClass(InnerT);