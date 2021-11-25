import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { accountDto } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) { }

  @Post('/newAccount') 
  async createAccount(@Body() account: accountDto) {
      return await this.transactionService.newAccount(account);
  }

  @Post('/newTransaction') 
  async createTransaction(@Body() transaction: accountDto) {
      return await this.transactionService.newTransaction(transaction);
  }

  @Get('/transactionList')
  transaction(id): any {
    return this.transactionService.findTransaction(id);
  }
}
