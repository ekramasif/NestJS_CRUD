import { Test, TestingModule } from '@nestjs/testing';
import { PassengerController } from './passengers.controller';
import { PassengerService } from './passengers.service';

describe('PassengersController', () => {
  let controller: PassengerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassengerController],
      providers: [PassengerService],
    }).compile();

    controller = module.get<PassengerController>(PassengerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
