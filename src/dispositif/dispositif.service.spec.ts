import { Test, TestingModule } from '@nestjs/testing';
import { DispositifService } from './dispositif.service';

describe('DispositifService', () => {
  let service: DispositifService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispositifService],
    }).compile();

    service = module.get<DispositifService>(DispositifService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
