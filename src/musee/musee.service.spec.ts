import { Test, TestingModule } from '@nestjs/testing';
import { MuseeService } from './musee.service';

describe('MuseeService', () => {
  let service: MuseeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuseeService],
    }).compile();

    service = module.get<MuseeService>(MuseeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
