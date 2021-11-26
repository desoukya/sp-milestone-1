import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { User, UserDocument } from '@sp/schemas';
import { Model } from 'mongoose';

@Injectable() 
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private userModel: Model <UserDocument>;

  /**
   * Determines if the user credentials provided are correct
   * @param dto
   */
  login(dto: AuthDto) { 
   
    if (dto.email!=null && dto.password!=null) {
      const payload = this.userModel.find({'email':dto.email,'password':dto.password}).exec();
      if (payload != null ) {
          return {
            access_token: this.jwtService.sign(payload),
          }
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

