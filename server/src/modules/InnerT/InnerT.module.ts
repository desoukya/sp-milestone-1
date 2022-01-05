import { Module } from '@nestjs/common';
import { InnerTService } from './InnerT.service';
import { InnerTController } from './InnerT.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InnerT, InnerTSchema } from 'src/schemas/Innert.schema';


@Module({
  imports:[MongooseModule.forFeature([{ name: InnerT.name, schema: InnerTSchema }])],
  exports: [InnerTService],
  controllers: [InnerTController],
  providers: [InnerTService],
})
export class InnerTModule {}