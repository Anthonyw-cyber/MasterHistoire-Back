import { Test, TestingModule } from '@nestjs/testing';
import { HandicapController } from './handicap.controller';

describe('HandicapController', () => {
  let controller: HandicapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandicapController],
    }).compile();

    controller = module.get<HandicapController>(HandicapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
