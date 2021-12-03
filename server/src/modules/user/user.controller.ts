import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { RegisterDTO } from './dto/user.dto';
//import { createUser } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
  /**
   * API endpoint handler returns the authenticated user from JWT payload
   */    
  @Post('register')
  async register(@Body()userDto: RegisterDTO){
    return await this.userService.createUser(userDto);
  }
}
