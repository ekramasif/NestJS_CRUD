import { Test, TestingModule } from '@nestjs/testing';
import { PassengersService } from './passengers.service';

describe('PassengersService', () => {
  let service: PassengersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassengersService],
    }).compile();

    service = module.get<PassengersService>(PassengersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
