import { Module } from '@nestjs/common';
import { PesajesService } from './pesajes.service';
import { PesajesController } from './pesajes.controller';

@Module({
  providers: [PesajesService],
  controllers: [PesajesController]
})
export class PesajesModule {}
