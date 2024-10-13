import { Injectable } from '@nestjs/common';
import { Cita } from './dto/cita.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCitaDto, UpdateCitaDto } from './dto/cita.dto';

@Injectable()
export class CitasService {
    constructor(
        @InjectRepository(Cita)
        private citaRepository: Repository<Cita>,
    ) {}

    async findAll(): Promise<Cita[]> {
        return this.citaRepository.find();
    }

    async findOne(id: number): Promise<Cita> {
        return this.citaRepository.findOne({ where: { id } });
    }

    async create(createCitaDto: CreateCitaDto): Promise<Cita> {
        return this.citaRepository.save(createCitaDto);
    }

    async update(id: number, updateCitaDto: UpdateCitaDto): Promise<Cita> {
        await this.citaRepository.update(id, updateCitaDto);
        return this.citaRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.citaRepository.delete(id);
    }
    
}
