import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DoctoresModule } from './doctores/doctores.module';
import { CitasModule } from './citas/citas.module';
import { MetodosDePagoModule } from './metodos-de-pago/metodos-de-pago.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      database: 'doctor_consult',
      synchronize: true,
    }),
    UsuariosModule,
    DoctoresModule,
    CitasModule,
    MetodosDePagoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
