import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './dto/doctor.entity';
import { CreateDoctorDto, UpdateDoctorDto } from './dto/doctor.dto';

@Injectable()
export class DoctoresService {
    constructor(
        @InjectRepository(Doctor)
        private doctorRepository: Repository<Doctor>,
    ) {}

    async findAll(): Promise<Doctor[]> {
        return this.doctorRepository.find();
    }

    async findOne(id: number): Promise<Doctor> {
        return this.doctorRepository.findOne({ where: { id } });
    }

    async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
        return this.doctorRepository.save(createDoctorDto);
    }

    async update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
        await this.doctorRepository.update(id, updateDoctorDto);
        return this.doctorRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.doctorRepository.delete(id);
    }
}
