import { Desafio } from './interfaces/desafio.interface';
import { Controller, Get, Logger } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

const ackErrors: string[] = [];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private readonly logger = new Logger(AppController.name);

  @EventPattern('notificacao-novo-desafio')
  async enviarEmailAdversario(
    @Payload() desafio: Desafio,
    @Ctx() context: RmqContext
  ): Promise<void> {

    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    try {
      
      this.logger.log(`desafio ${JSON.stringify(desafio)}`);

      await this.appService.enviarEmailParaAdversario(desafio);

      await channel.ack(originalMsg);
    } catch(error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);

      const filterAckError = ackErrors.filter(
          ackError => error.message.includes(ackError)
      )

      if (filterAckError)
          await channel.ack(originalMsg);
    }

  }
}
