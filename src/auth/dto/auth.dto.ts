import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ description: 'Correo electrónico del usuario' })
    correo_electronico: string;

    @ApiProperty({ description: 'Contraseña del usuario' })
    contrasena: string;
}
