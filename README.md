# Price Synchronizer

## Description

Server app which fetches and stores the BTCUSDT price from [binance](https://www.binance.com/en) API.

The app exposes the following GraphQl requests:
- register
- login
- get user data
- update user data
- get the latest stored price
- get exchange of the price history

## Tech Stack

- Nest.js
- TypeScript
- GraphQL
- PostgreSQL
- TypeORM

## Installation

Then run following commands:

```bash
# install dependencies
$ npm install

# start docker services (only database for now)
$ docker-compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```


