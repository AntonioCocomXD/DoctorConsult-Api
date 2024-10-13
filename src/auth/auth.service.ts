import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './dto/auth.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/usuarios.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usuariosService: UsuariosService) {}

  async validateUser(
    correo_electronico: string,
    contrasena: string,
  ): Promise<any> {
    const user = await this.usuariosService.findByEmail(correo_electronico);

    if (user && (await bcrypt.compare(contrasena, user.contrasena))) {
      const { contrasena, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginDto) {
    const validatedUser = await this.validateUser(
      user.correo_electronico,
      user.contrasena,
    );
    if (validatedUser) {
      return validatedUser;
    } else {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }
  }

  async register(user: CreateUsuarioDto) {
    const existingUser = await this.usuariosService.findByEmail(
      user.correo_electronico,
    );
    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está en uso');
    }

    const hashedPassword = await bcrypt.hash(user.contrasena, 10);
    const newUser = await this.usuariosService.create({
      ...user,
      contrasena: hashedPassword,
    });

    return { ...newUser, contrasena: undefined };
  }
}
