import {
    Controller,
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { DoctoresService } from './doctores.service';
  import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateDoctorDto, UpdateDoctorDto } from './dto/doctor.dto';
  
  @ApiTags('doctores')
  @Controller('doctores')
  export class DoctoresController {
      constructor(
          private readonly doctoresService: DoctoresService,
      ) {}
      
      @Get()
      @ApiResponse({ status: 200, description: 'Lista de doctores recuperada exitosamente.' })
      findAll() {
          return this.doctoresService.findAll();
      }
      
      @Get(':id')
      @ApiParam({ name: 'id', required: true, description: 'ID del doctor' }) 
      @ApiResponse({ status: 200, description: 'Doctor encontrado.' })
      @ApiResponse({ status: 404, description: 'Doctor no encontrado.' })
      findOne(@Param('id') id: string) {
          return this.doctoresService.findOne(+id);
      }
      
      @Post()
      @ApiResponse({ status: 201, description: 'Doctor creado exitosamente.' })
      @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
      create(@Body() body: CreateDoctorDto) {
          return this.doctoresService.create(body);
      }
      
      @Put(':id')
      @ApiParam({ name: 'id', required: true, description: 'ID del doctor a actualizar' })
      @ApiResponse({ status: 200, description: 'Doctor actualizado exitosamente.' })
      @ApiResponse({ status: 404, description: 'Doctor no encontrado.' })
      update(@Param('id') id: string, @Body() body: UpdateDoctorDto) {
          return this.doctoresService.update(+id, body);
      }
      
      @Delete(':id')
      @ApiParam({ name: 'id', required: true, description: 'ID del doctor a eliminar' })
      @ApiResponse({ status: 200, description: 'Doctor eliminado exitosamente.' })
      @ApiResponse({ status: 404, description: 'Doctor no encontrado.' })
      remove(@Param('id') id: string) {
          return this.doctoresService.remove(+id);
      }
  }
  