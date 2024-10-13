import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './dto/usuarios.entity';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto/usuarios.dto';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) {}

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    async findOne(id: number): Promise<Usuario> {
        return this.usuarioRepository.findOne({ where: { id } });
    }

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        return this.usuarioRepository.save(createUsuarioDto);
    }

    async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
        await this.usuarioRepository.update(id, updateUsuarioDto);
        return this.usuarioRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);
    }

    async findByEmail(correo_electronico: string): Promise<Usuario> {
        return this.usuarioRepository.findOne({ where: { correo_electronico } });
    }

}
