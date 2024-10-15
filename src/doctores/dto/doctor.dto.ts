import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty({ description: 'Nombre del doctor' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Telefono' })
  @IsString()
  telefono: string;

  @ApiProperty({ description: 'Especialidad del doctor' })
  @IsString()
  especialidad: string;

  @ApiProperty({ description: 'Horario de trabajo del doctor' })
  @IsString()
  horario_trabajo: string;

  @ApiProperty({ description: 'foto'})
  @IsString()
  foto: string;
}

export class UpdateDoctorDto {
  @ApiProperty({ description: 'Nombre del doctor', required: false })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ description: 'Telefono', required: false })
  @IsOptional()
  @IsString()
  telefono?: string;

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

  @ApiProperty({ description: 'foto'})
  @IsOptional()
  @IsString()
  foto: string;

}
