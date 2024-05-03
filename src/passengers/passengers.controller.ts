import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PassengerService } from './passengers.service';
import { CreatePassengerDto, UpdatePassengerDto } from './dto/passenger.dto';
import { Passenger } from './entities/passenger.entity';

@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Get()
  async findAll(): Promise<Passenger[]> {
    return this.passengerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Passenger> {
    return this.passengerService.findOne(id);
  }

  @Post()
  async create(@Body() createPassengerDto: CreatePassengerDto): Promise<Passenger> {
    return this.passengerService.create(createPassengerDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePassengerDto: UpdatePassengerDto): Promise<Passenger> {
    return this.passengerService.update(id, updatePassengerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.passengerService.remove(id);
  }
}
