import { Module } from '@nestjs/common';
import { DoctoresService } from './doctores.service';
import { DoctoresController } from './doctores.controller';
import { Doctor } from './dto/doctor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor])],
  providers: [DoctoresService],
  controllers: [DoctoresController]
})
export class DoctoresModule {}
