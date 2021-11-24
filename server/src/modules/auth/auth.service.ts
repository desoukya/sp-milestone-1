import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { UserDto } from '../user/dtos/user.dto';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwtPayload.interface';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) { }

  /**
   * Determines if the user credentials provided are correct
   * @param dto
   */
  async login(dto: AuthDto) {
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

    let userLogin = await this.usersService.findOneByEmail(dto.email);

    return new Promise((resolve) => {

      // Check the supplied password against the hash stored for this email address
      userLogin.checkPassword(dto.password, (err, isMatch) => {

        if (err) throw new UnauthorizedException();

        if (isMatch) {
          // If there is a successful match, generate a JWT for the user
          resolve(this.createJwtPayload(userLogin));

        } else {
          throw new UnauthorizedException();
        }

      });

    });
  }

  async validateUserByJwt(payload: JwtPayload) {

    // This will be used when the user has already logged in and has a JWT
    let user = await this.usersService.findOneByEmail(payload.email);

    if (user) {
      return this.createJwtPayload(user);
    } else {
      throw new UnauthorizedException();
    }

  }
  createJwtPayload(user) {

    let data: JwtPayload = {
      email: user.email
    };

    let jwt = this.jwtService.sign(data);

    return {
      expiresIn: 3600,
      token: jwt
    }

  }
}
