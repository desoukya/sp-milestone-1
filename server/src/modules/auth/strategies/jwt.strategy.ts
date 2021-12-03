import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreException: true,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  /**
   * Determines if the user JWT token is valid.
   * On successfull validation, returns jwt payload (assigned to req.user)
   * @param payload
   */
  async validate(payload: any) {
    console.log('valoidate()', payload);
    return payload;
  }
}
