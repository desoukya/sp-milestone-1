import { Body, Controller, Get, Post, Request, UseGuards,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransactionService } from './transaction.service';
import {TransactionDto} from './dto/transaction.dto'
import {ObjectId} from 'mongoose';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  getAll():any{
    return this.transactionService.getAll();
  }

  @Post('inner')
  inner(@Body() senderDto:TransactionDto):any{
      const sender = this.transactionService.createSenderTransaction(senderDto);
      const reciever = this.transactionService.createRecieverTransaction(senderDto);
      return [sender,reciever];
  }
}