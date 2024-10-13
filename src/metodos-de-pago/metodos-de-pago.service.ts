import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoDePago } from './dto/pago.entity';
import { CreateMetodoDePagoDto, UpdateMetodoDePagoDto } from './dto/pago.dto';

@Injectable()
export class MetodosDePagoService {
    constructor(
        @InjectRepository(MetodoDePago)
        private metodoDePagoRepository: Repository<MetodoDePago>,
    ) {}

    async findAll(): Promise<MetodoDePago[]> {
        return this.metodoDePagoRepository.find();
    }

    async findOne(id: number): Promise<MetodoDePago> {
        return this.metodoDePagoRepository.findOne({ where: { id } });
    }

    async create(createMetodoDePagoDto: CreateMetodoDePagoDto): Promise<MetodoDePago> {
        return this.metodoDePagoRepository.save(createMetodoDePagoDto);
    }

    async update(id: number, updateMetodoDePagoDto: UpdateMetodoDePagoDto): Promise<MetodoDePago> {
        await this.metodoDePagoRepository.update(id, updateMetodoDePagoDto);
        return this.metodoDePagoRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.metodoDePagoRepository.delete(id);
    }
}
