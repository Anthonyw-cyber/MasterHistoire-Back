import { Test, TestingModule } from '@nestjs/testing';
import { MuseeController } from './musee.controller';

describe('MuseeController', () => {
  let controller: MuseeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuseeController],
    }).compile();

    controller = module.get<MuseeController>(MuseeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
