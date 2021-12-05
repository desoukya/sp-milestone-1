<<<<<<< Updated upstream
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  transcations, transcationsSchema } from './transaction.schema';
import { TransactionController } from './transactions.controller';
import { transactionService } from './transaction.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: transcations.name, schema: transcationsSchema }])],
  exports: [transactionService],
  controllers: [TransactionController],
  providers: [transactionService],
})
=======
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  transcations, transcationsSchema } from './transaction.schema';
import { TransactionController } from './transactions.controller';
import { transactionService } from './transaction.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: transcations.name, schema: transcationsSchema }])],
  exports: [transactionService],
  controllers: [TransactionController],
  providers: [transactionService],
})
>>>>>>> Stashed changes
export class TransactionModule {}