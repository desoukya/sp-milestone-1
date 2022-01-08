import { Body, Controller, Get, Post, Request, UseGuards,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransactionService } from './transaction.service';
import {TransactionDto} from './dto/transaction.dto'
import { AccountService } from '../account/account.service';
import {ObjectId} from 'mongoose';


@Controller('transactions')
export class TransactionController {
  // TODO: Define your Transaction Endpoints
  constructor(private transactionService: TransactionService,private accountService:AccountService) {}

  @Get()
  getAll():any{
    return this.transactionService.getAll();
  }

  @Get(':accountId')
  transaction(@Param('accountId') accountId: string): any {
    return this.transactionService.getTrancation(accountId);
  }

  @Post('')
  CreateTransaction(@Body() dto:TransactionDto):any{
      const transaction = this.transactionService.createTransaction(dto);
      return transaction;
  }

  @Post('internaltransfer')
  async internalTransfer(@Body() sender_dto:TransactionDto):Promise<any>{
    
    const sender_balance= await this.accountService.calculateBalance(sender_dto.accountid);
    if(Number(sender_balance)-sender_dto.amount<0||sender_dto.amount<0){
      throw 500;
    }
    
    const sender_transaction = this.transactionService.createTransaction(sender_dto);
    const reciever_transaction = this.transactionService.createRecieverTransaction(sender_dto);
    return [sender_transaction,reciever_transaction];
  }

}