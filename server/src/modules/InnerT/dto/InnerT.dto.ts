import { IsNotEmpty } from 'class-validator';

export class InnerTDto{

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  value: number;

  @IsNotEmpty()
  accountid: string;
}