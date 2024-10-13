import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/usuarios.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('login')
    @ApiOperation({ summary: 'Inicia sesión' })
    @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso.' })
    @ApiResponse({ status: 401, description: 'Usuario o contraseña incorrectos.' })
    async login(@Body() auth: LoginDto) {
        return this.authService.login(auth);
    }

    @Post('register')
    @ApiOperation({ summary: 'Registra un nuevo usuario' })
    @ApiResponse({ status: 201, description: 'Registro exitoso.' })
    @ApiResponse({ status: 409, description: 'El correo electrónico ya está en uso.' })
    async register(@Body() auth: CreateUsuarioDto) {
        return this.authService.register(auth);
    }
}

