import {
  Body,
  Controller,
  Get,
  Param,
  Request,
  UseGuards,
  Post,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { TransactionService } from "../transaction/transaction.service";
import { AccountService } from "./account.service";
import { AccountDto } from "./dtos/account.dto";
import {
  Account,
  AccountDocument,
  Transaction,
  TransactionSchema,
} from "@sp/schemas";

@Controller("accounts")
export class AccountController {
  // TODO: Define your account Endpoints
  constructor(private accountService: AccountService) {}

  @Get()
  findAll(): any {
    return this.accountService.findAll();
  }
  @Get(":userid")
  GetAccount(@Param("userid") userid: string): any {
    return this.accountService.findAccounts(userid);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Post(":userid")
  CreateAccount(@Param("userid") userid: string): any {
    const accountId = this.accountService.createAccount(userid);
    return accountId;
  }

  @Get("/user/balance")
  getAccountBalance(@Body() reqBody: any) {
    console.log(reqBody.accountid)
    console.log("Money");
    return this.accountService.calculateBalance(reqBody.accountid);
  }
}
