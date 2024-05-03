import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    async findOne(email: string): Promise<User> {
      return this.userRepository.findOne({ where: { email } });
    }

    async create(data: any): Promise<User> {
        return this.userRepository.save(data);
    }
}
