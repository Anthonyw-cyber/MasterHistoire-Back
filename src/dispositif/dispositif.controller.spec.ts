import { Test, TestingModule } from '@nestjs/testing';
import { DispositifController } from './dispositif.controller';

describe('DispositifController', () => {
  let controller: DispositifController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispositifController],
    }).compile();

    controller = module.get<DispositifController>(DispositifController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
