import { Controller, Get, Post, Body, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { transactionDto } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) { }

  @Post('/newTransaction') 
  async createTransaction(@Body() transaction: transactionDto) {
      return await this.transactionService.newTransaction(transaction);
  }

  @Get('/:id/transactionList')
  async transaction(@Param('id') id: string){
    console.log("l id aho lli da5el: " + id);
    return await this.transactionService.findTransaction(id);
  }
}