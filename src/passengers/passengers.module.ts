import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';

@Module({
  controllers: [PassengersController],
  providers: [PassengersService],
})
export class PassengersModule {}
