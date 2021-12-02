import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDTO } from '../auth/dtos/auth.dto';
import { UserService } from './user.service';
//import { createUser } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
  /**
   * API endpoint handler returns the authenticated user from JWT payload
   */    
  
  /*
  user(@Request() req: any): any {
    return req.user;
  }
  */
  @Post('register')
  user(@Body() req: any):any{
    return this.userService.createUser(req);
  }
  /**
   * API endpoint handler returns all users from mongo database
   
  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  users(): any {
    return this.userService.findAll();
  }*/
}
