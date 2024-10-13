import {
    Controller,
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateMetodoDePagoDto, UpdateMetodoDePagoDto } from './dto/pago.dto';
import { MetodosDePagoService } from './metodos-de-pago.service';
  
  @ApiTags('metodos-de-pago')
  @Controller('metodos-de-pago')
  export class MetodosDePagoController {
    constructor(private readonly metodosDePagoService: MetodosDePagoService) {}
  
    @Get()
    @ApiResponse({ status: 200, description: 'Lista de métodos de pago recuperada exitosamente.' })
    findAll() {
      return this.metodosDePagoService.findAll();
    }
  
    @Get(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID del método de pago' }) 
    @ApiResponse({ status: 200, description: 'Método de pago encontrado.' })
    @ApiResponse({ status: 404, description: 'Método de pago no encontrado.' })
    findOne(@Param('id') id: string) {
      return this.metodosDePagoService.findOne(+id);
    }
  
    @Post()
    @ApiResponse({ status: 201, description: 'Método de pago creado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
    create(@Body() body: CreateMetodoDePagoDto) {
      return this.metodosDePagoService.create(body);
    }
  
    @Put(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID del método de pago a actualizar' })
    @ApiResponse({ status: 200, description: 'Método de pago actualizado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Método de pago no encontrado.' })
    update(@Param('id') id: string, @Body() body: UpdateMetodoDePagoDto) {
      return this.metodosDePagoService.update(+id, body);
    }
  
    @Delete(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID del método de pago a eliminar' }) 
    @ApiResponse({ status: 200, description: 'Método de pago eliminado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Método de pago no encontrado.' })
    remove(@Param('id') id: string) {
      return this.metodosDePagoService.remove(+id);
    }
  }
  