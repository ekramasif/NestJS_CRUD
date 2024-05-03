import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './entities/passenger.entity';
import { PassengerController } from './passengers.controller';
import { PassengerService } from './passengers.service';
import { BookingModule } from '../bookings/bookings.module';

@Module({
  imports: [TypeOrmModule.forFeature([Passenger]), BookingModule],
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule {}