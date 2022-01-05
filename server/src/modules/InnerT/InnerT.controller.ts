import { Body, Controller, Get, Post, Request, UseGuards,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InnerTService } from './InnerT.service';
import {InnerTDto} from './dto/InnerT.dto'
import {ObjectId} from 'mongoose';

@Controller('Innert')
export class InnerTController {
  // TODO: Define your Transaction Endpoints
  constructor(private InnertService: InnerTService) {}

  /**
   * API endpoint handler returns the authenticated user from JWT payload
   */

  //@UseGuards(AuthGuard('jwt'))



@Get()
getAll():any{
  return this.InnertService.getAll();
}


  @Get(':accountId')
  transaction(@Param('accountId') accountId: string): any {
    return this.InnertService.getTrancation(accountId);
  }

  @Post('')
  CreateTransaction(@Body() dto:InnerTDto):any{
      const Innert = this.InnertService.createInnerT(dto);
      return Innert;
  }
}