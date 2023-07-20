/* eslint-disable @typescript-eslint/ban-types */
import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SynchronizerService } from './synchronizer.service';
import { SynchronizerEntity } from './entities/synchronizer.entity';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<
  Repository<SynchronizerEntity>
> = jest.fn(() => ({
  findOne: jest.fn((entity) => entity),
}));

describe('ExchangeRatesService', () => {
  let service: SynchronizerService;
  let repositoryMock: MockType<Repository<SynchronizerEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SynchronizerService,
        {
          provide: getRepositoryToken(SynchronizerEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<SynchronizerService>(SynchronizerService);
    repositoryMock = module.get(getRepositoryToken(SynchronizerEntity));
  });

  it('should get latest rate', async () => {
    const currentExchangeRate = {
      price: '55055.00000000',
      symbol: 'BTCUSDT',
    };

    repositoryMock.findOne.mockReturnValue(currentExchangeRate);

    expect(await service.getLatestExchangeRate()).toEqual(currentExchangeRate);
  });
});
