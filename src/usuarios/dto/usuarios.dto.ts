import { IsString, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({ description: 'Nombre del usuario' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Correo electrónico del usuario' })
  @IsEmail()
  correo_electronico: string;

  @ApiProperty({ description: 'Teléfono del usuario', required: false })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({ description: 'Contraseña del usuario' })
  @IsString()
  contrasena: string;
}

export class UpdateUsuarioDto {
  @ApiProperty({ description: 'Nombre del usuario', required: false })
  @IsString()
  nombre?: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    required: false,
  })
  @IsEmail()
  correo_electronico?: string;

  @ApiProperty({ description: 'Teléfono del usuario', required: false })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({ description: 'Contraseña del usuario', required: false })
  @IsString()
  contrasena?: string;
}
