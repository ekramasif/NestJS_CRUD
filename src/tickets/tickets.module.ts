import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { TicketController } from './tickets.controller';
import { TicketService } from './tickets.service';
import { BookingModule } from '../bookings/bookings.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), BookingModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}