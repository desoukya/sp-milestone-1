import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService : AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreException: true,
      secretOrKey: "spSecretKeyProv",
    });
  }
  /**
   * Determines if the user JWT token is valid.
   * On successfull validation, returns jwt payload (assigned to req.user)
   * @param payload
   */
  async validate(payload: any) {
    /*
      Each JWT has a "payload" section, which includes 
      the data we insert into the JWT object when
      creating and signing it (auth.service.ts)

      If the JWT bearer header auth token is not valid
      an exception is thrown

      Otherwise, the JWT payload is returned.
      More specifically, Passport will create a "user" property
      on the Express HTTP Request object and assign whatever 
      is returned here to req.user
    */

      //done in auth service
      
      return payload
    
  }
}
