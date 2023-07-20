/* eslint-disable @typescript-eslint/ban-types */
import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<
  Repository<UserEntity>
> = jest.fn(() => ({
  findOne: jest.fn((entity) => entity),
}));

describe('UserService', () => {
  let service: UserService;
  let repositoryMock: MockType<Repository<UserEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repositoryMock = module.get(getRepositoryToken(UserEntity));
  });

  it('should get user by id', async () => {
    const user = {
      id: "123",
      firstName: "Test",
      lastName: "Test"
    }

    repositoryMock.findOne.mockReturnValue(user);

    expect(await service.findOne(user.id)).toEqual(user);
  });
});
