import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BookingService } from './bookings.service';
import { BookingDto } from './dto/booking.dto';
import { Booking } from './entities/booking.entity';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  async findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Booking> {
    return this.bookingService.findOne(id);
  }

  @Post()
  async create(@Body() bookingDto: BookingDto): Promise<Booking> {
    return this.bookingService.create(bookingDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() bookingDto: BookingDto): Promise<Booking> {
    return this.bookingService.update(id, bookingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.bookingService.remove(id);
  }
}
