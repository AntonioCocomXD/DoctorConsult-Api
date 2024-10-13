import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty({ description: 'Nombre del doctor' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Especialidad del doctor' })
  @IsString()
  especialidad: string;

  @ApiProperty({ description: 'Horario de trabajo del doctor' })
  @IsString()
  horario_trabajo: string;
}

export class UpdateDoctorDto {
  @ApiProperty({ description: 'Nombre del doctor', required: false })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ description: 'Especialidad del doctor', required: false })
  @IsOptional()
  @IsString()
  especialidad?: string;

  @ApiProperty({
    description: 'Horario de trabajo del doctor',
    required: false,
  })
  @IsOptional()
  @IsString()
  horario_trabajo?: string;
}
