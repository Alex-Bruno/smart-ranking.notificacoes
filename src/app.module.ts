import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyrmqModule } from './proxyrmq/proxyrmq.module';

@Module({
  imports: [
    ProxyrmqModule,
    ConfigModule.forRoot({isGlobal: true}),
    MailerModule.forRoot({
      transport: {
        host: 'host@gmail.com',
        port: 587,
        secure: false,
        tls: {
          ciphers: 'SSLv3'
        },
        auth: {
          user: 'user',
          pass: ''
        }
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
