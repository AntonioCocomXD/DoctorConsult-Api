import { Doctor } from 'src/doctores/dto/doctor.entity';
import { Usuario } from 'src/usuarios/dto/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  usuario_id: number;

  @Column('int')
  doctor_id: number;

  @Column('timestamp')
  fecha_hora: Date;

  @Column('text')
  estado: string;

  @Column('text')
  asunto: String;
}
