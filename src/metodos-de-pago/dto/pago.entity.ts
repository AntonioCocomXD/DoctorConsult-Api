import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('metodos_de_pago')
export class MetodoDePago {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  detalles: string;
}
