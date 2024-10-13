import { Module } from '@nestjs/common';
import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';
import { Cita } from './dto/cita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cita])],
  controllers: [CitasController],
  providers: [CitasService]
})
export class CitasModule {}
