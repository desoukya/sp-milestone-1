import { Controller, Get, Param, Post,} from "@nestjs/common";
import { AccountService } from "./account.service";


@Controller("accounts")
export class AccountController {
  constructor(private accountService: AccountService) {}
  
  @Get()
  findAll(): any {
    return this.accountService.findAll();
  }

  @Get(":userid")
  GetAccount(@Param("userid") userid: string): any {
    return this.accountService.findAccounts(userid);
  }

  @Post(":userid")
  CreateAccount(@Param("userid") userid: string): any {
    const account = this.accountService.createAccount(userid);
    return account;
  }
}