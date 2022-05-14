## Description

Construa um Backend resiliente e escalável com NestJS, RabbitMQ, serviços em cloud[AWS e SAP] e padrões arquiteturais corporativos.

## Scopo

Micro serviço responsável pelas notificações.

## Installation

```bash
$ npm install
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

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dependences

- npm install @nestjs/microservices
- npm install amqplib amqp-connection-manager
- npm i @nestjs/config
- npm i @nestjs-modules/mailer nodemailer
