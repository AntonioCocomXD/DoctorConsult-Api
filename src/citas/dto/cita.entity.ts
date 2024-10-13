import { Doctor } from 'src/doctores/dto/doctor.entity';
import { Usuario } from 'src/usuarios/dto/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Doctor)
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Column('timestamp')
  fecha_hora: Date;

  @Column('text')
  estado: string;
}
