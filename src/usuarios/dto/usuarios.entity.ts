import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;

  @Column('text', { unique: true })
  correo_electronico: string;

  @Column('text', { nullable: true })
  telefono: string;

  @Column('text')
  contrasena: string;
}
