import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { User, UserDocument } from '@sp/schemas';
import { Model } from 'mongoose';
import {UserService} from '../user/user.service'

@Injectable() 
export class AuthService {
  constructor(private userService: UserService,private jwtService: JwtService) {}
  
  

  /**
   * Determines if the user credentials provided are correct
   * @param dto
   */
  async login(dto: AuthDto) { 
   
    if (dto.email!=null && dto.password!=null) {
      var payload = await this.userService.findOneUser(dto);
      console.log(payload);
      if (payload != null) {
          const myToken={ email: payload.email, sub: payload.userId };
          //const payload = { username: user.username, sub: user.userId };
            const access_token=this.jwtService.sign(myToken)
            return payload;
          
      }
    }
    return UnauthorizedException;
    /* 
      TODO: Add your login logic here to return
      appropriate exceptions when a user/password
      is incorrect. In addition, if a user is found
      and credentials are correct, create a JWT token
      with the entire user object as the payload.
      
      Note: JWT open standard RFC 7519 recommends
      a payload object contain certain "claims".
      As such, it's recommended to create a property
      called "sub" in payload which maps to the user id.
    */
  }
}

