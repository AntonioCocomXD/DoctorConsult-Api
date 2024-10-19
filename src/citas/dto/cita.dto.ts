import { IsInt, IsDateString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCitaDto {
  @ApiProperty({ description: 'ID del usuario que solicita la cita' })
  @IsInt()
  usuario_id: number;

  @ApiProperty({ description: 'ID del doctor con quien se solicita la cita' })
  @IsInt()
  doctor_id: number;

  @ApiProperty({ description: 'Fecha y hora de la cita' })
  @IsDateString()
  fecha_hora: Date;

  @ApiProperty({ description: 'Estado de la cita' })
  @IsString()
  estado: string;

  @ApiProperty({ description: 'Asunto de la cita' })
  @IsString()
  asunto: string;
}

export class UpdateCitaDto {
  @ApiProperty({ description: 'ID del usuario que solicita la cita', required: false })
  @IsInt()
  usuario_id?: number;

  @ApiProperty({ description: 'ID del doctor con quien se solicita la cita', required: false })
  @IsInt()
  doctor_id?: number;

  @ApiProperty({ description: 'Fecha y hora de la cita', required: false })
  @IsDateString()
  fecha_hora?: Date;

  @ApiProperty({ description: 'Estado de la cita', required: false })
  @IsString()
  estado?: string;

  @ApiProperty({ description: 'Asunto de la cita', required: false })
  @IsString()
  asunto?: string;
}
