import {
    Controller,
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { UsuariosService } from './usuarios.service';
  import { CreateUsuarioDto, UpdateUsuarioDto } from './dto/usuarios.dto';
  import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
  
  @ApiTags('usuarios')
  @Controller('usuarios')
  export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}
  
    @Get()
    @ApiResponse({ status: 200, description: 'Lista de usuarios recuperada exitosamente.' })
    findAll() {
      return this.usuariosService.findAll();
    }
  
    @Get(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID del usuario' })
    @ApiResponse({ status: 200, description: 'Usuario encontrado.' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
    findOne(@Param('id') id: string) {
      return this.usuariosService.findOne(+id);
    }
  
    @Post()
    @ApiResponse({ status: 201, description: 'Usuario creado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
    create(@Body() body: CreateUsuarioDto) {
      return this.usuariosService.create(body);
    }
  
    @Put(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID del usuario a actualizar' })
    @ApiResponse({ status: 200, description: 'Usuario actualizado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
    update(@Param('id') id: string, @Body() body: UpdateUsuarioDto) {
      return this.usuariosService.update(+id, body);
    }
  
    @Delete(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID del usuario a eliminar' })
    @ApiResponse({ status: 200, description: 'Usuario eliminado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
    remove(@Param('id') id: string) {
      return this.usuariosService.remove(+id);
    }
  }
  