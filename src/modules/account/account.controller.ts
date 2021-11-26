import { Body, Controller, Get, Param, Request, UseGuards , Post} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransactionService } from '../transaction/transaction.service';
import { AccountService } from './account.service';
import { AccountDto } from './dtos/account.dto';

@Controller('accounts')
export class AccountController {
  // TODO: Define your account Endpoints
  constructor(private accountService: AccountService) {}

  /**
   * API endpoint handler returns the authenticated user from JWT payload
     
  //@UseGuards(AuthGuard('jwt'))
  @Get()
  account(@Request() req: any): any {//might not need this method
    return req.account;
  } 
   */

  /**
   * API endpoint handler returns all users from mongo database
   */
  //@UseGuards(AuthGuard('jwt'))
  // @Get('list')
  // accounts(): any {
  //   return this.accountService.findAll();
  // }

  //@UseGuards(AuthGuard('jwt'))
  @Get(':userid')
  GetAccount(@Param('userid') userid: string): any {
    return this.accountService.findAccounts(userid);
  }


  //@UseGuards(AuthGuard('jwt'))
  @Post(':userid')
  CreateAccount(@Param('userid')userid:string):any{
      const accountId = this.accountService.createAccount(userid);
  }

}