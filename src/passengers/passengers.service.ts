import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePassengerDto, UpdatePassengerDto } from './dto/passenger.dto';
import { Passenger } from './entities/passenger.entity';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(Passenger)
    private readonly passengerRepository: Repository<Passenger>,
  ) {}

  async findAll(): Promise<Passenger[]> {
    return this.passengerRepository.find();
  }

  async findOne(id: number): Promise<Passenger> {
    return this.passengerRepository.findOne({ where: { id } });
  }

  async create(createPassengerDto: CreatePassengerDto): Promise<Passenger> {
    return this.passengerRepository.save(createPassengerDto);
  }

  async update(id: number, updatePassengerDto: UpdatePassengerDto): Promise<Passenger> {
    await this.passengerRepository.update(id, updatePassengerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.passengerRepository.delete(id);
  }
}
