import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  transcations, transcationsSchema } from './transaction.schema';
import { TransactionController } from './transaction.controller';
import { transactionService } from './transaction.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: transcations.name, schema: transcationsSchema }])],
  exports: [transactionService],
  controllers: [TransactionController],
  providers: [transactionService],
})
export class TransactionModule {}