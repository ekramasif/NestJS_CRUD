import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from './bookings.controller';
import { BookingService } from './bookings.service';

describe('BookingsController', () => {
  let controller: BookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
      providers: [BookingService],
    }).compile();

    controller = module.get<BookingController>(BookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
