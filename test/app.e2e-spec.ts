import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { ExecutionContext, INestApplication } from '@nestjs/common';
import { ExchangeRateDto } from '../src/synchronizer/dto/exchange-rate.dto';
import { GqlAuthGuard } from '../src/auth/guards/gql-auth.guard';
import { GqlExecutionContext } from '@nestjs/graphql';

const rates: ExchangeRateDto[] = [
  {
    price: '55055.00000000',
    symbol: 'BTCUSDT',
  },
  {
    price: '65055.00000000',
    symbol: 'BTCUSDT',
  },
  {
    price: '75055.00000000',
    symbol: 'BTCUSDT',
  },
];

const gql = '/graphql';

describe('GraphQL AppResolver (e2e) {Supertest}', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideGuard(GqlAuthGuard)
      .useValue({
        canActivate: (context: ExecutionContext) => {
          const ctx = GqlExecutionContext.create(context);
          ctx.getContext().req.user = { id: 'abc123' }; // Your user object
          return true;
        },
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe(gql, () => {
    describe('rates', () => {
      it('should get exchange rate history', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({ query: '{getExchangeRateHistory {id price}}' })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.getExchangeRateHistory).toBeDefined();
          });
      });

      it('should get latest exchange rate', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({ query: '{getLatestExchangeRate {id price}}' })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.getLatestExchangeRate).toBeDefined();
          });
      });
    });
  });
});
