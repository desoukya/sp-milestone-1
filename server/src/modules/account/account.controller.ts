import { Body, Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { accountService } from './account.service';

@Controller("accounts")
export class AccountController {
  constructor(private accountService: accountService) {}

 
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAccouts(@Body() req:any){
    console.log(req);
    return this.accountService.getAll(req);
    }
}
