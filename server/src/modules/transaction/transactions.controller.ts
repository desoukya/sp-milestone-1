import { Controller, Get, Post, Body, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ObjectId } from 'mongoose';
import { transactionDto } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) { }

  @Post('/newTransaction') 
  async createTransaction(@Body() transaction: transactionDto) {
      return await this.transactionService.newTransaction(transaction);
  }

  @Get('/transactionList/:id')
  async transaction(@Param('id') id: ObjectId){
    console.log("l id aho lli da5el: " + id);
    return await this.transactionService.findTransaction(id);
  }
}