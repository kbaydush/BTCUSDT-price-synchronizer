import { Test, TestingModule } from '@nestjs/testing';
import { SynchronizerService } from './synchronizer.service';

describe('SynchronizerService', () => {
  let service: SynchronizerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SynchronizerService],
    }).compile();

    service = module.get<SynchronizerService>(SynchronizerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
