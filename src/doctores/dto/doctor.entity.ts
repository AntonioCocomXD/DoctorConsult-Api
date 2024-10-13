import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('doctores')
export class Doctor {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  especialidad: string;

  @Column('text')
  horario_trabajo: string;
}
