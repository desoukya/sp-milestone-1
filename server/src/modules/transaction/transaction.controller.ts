import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { transactionService  } from './transaction.service';
import {ObjectId} from 'mongoose';
import { Transactiondata } from './transaction.data';
import { transcations } from './transaction.schema';


@Controller('transaction')
export class TransactionController  {
  constructor(private transactionService: transactionService ) {}

  /*
   * API endpoint handler returns the authenticated user from JWT payload
   */
  // @UseGuards(AuthGuard('jwt'))
  @Get()
  transcations(@Request() req: any): any {
    return req.transcations;
  }

  /*
   * API endpoint handler returns all users from mongo database
   */
  // @UseGuards(AuthGuard('jwt'))
 
  @Get('accountid')
  transactions(@Param('accountid') accountid: string): any {
    return this.transactionService. getTranscation(accountid);


  }
  @Post(':accountid')
  CreateTransaction(@Body() data:Transactiondata):any{
      const transaction = this.transactionService.createTransaction(data);
      return transaction;
  }
}
