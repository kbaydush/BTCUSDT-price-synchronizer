import { Test, TestingModule } from '@nestjs/testing';
import { SynchronizerController } from './synchronizer.controller';

describe('SynchronizerController', () => {
  let controller: SynchronizerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SynchronizerController],
    }).compile();

    controller = module.get<SynchronizerController>(SynchronizerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
