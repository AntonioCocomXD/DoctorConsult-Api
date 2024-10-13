import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMetodoDePagoDto {
  @ApiProperty({ description: 'Nombre del método de pago' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Detalles del método de pago' })
  @IsString()
  detalles: string;
}

export class UpdateMetodoDePagoDto {
  @ApiProperty({ description: 'Nombre del método de pago', required: false })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ description: 'Detalles del método de pago', required: false })
  @IsOptional()
  @IsString()
  detalles?: string;
}
