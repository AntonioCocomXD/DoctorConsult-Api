import { Module } from '@nestjs/common';
import { MetodosDePagoController } from './metodos-de-pago.controller';
import { MetodosDePagoService } from './metodos-de-pago.service';
import { MetodoDePago } from './dto/pago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoDePago])],
  controllers: [MetodosDePagoController],
  providers: [MetodosDePagoService]
})
export class MetodosDePagoModule {}
