import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CitasService } from './citas.service';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateCitaDto, UpdateCitaDto } from './dto/cita.dto';

@ApiTags('citas')
@Controller('citas')
export class CitasController {
    constructor(private readonly citasService: CitasService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'Lista de citas recuperada exitosamente.' })
    findAll() {
        return this.citasService.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID de la cita' })
    @ApiResponse({ status: 200, description: 'Cita encontrada.' })
    @ApiResponse({ status: 404, description: 'Cita no encontrada.' })
    findOne(@Param('id') id: string) {
        return this.citasService.findOne(+id);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Cita creada exitosamente.' })
    @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
    create(@Body() body: CreateCitaDto) {
        return this.citasService.create(body);
    }

    @Put(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID de la cita a actualizar' }) 
    @ApiResponse({ status: 200, description: 'Cita actualizada exitosamente.' })
    @ApiResponse({ status: 404, description: 'Cita no encontrada.' })
    update(@Param('id') id: string, @Body() body: UpdateCitaDto) {
        return this.citasService.update(+id, body);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', required: true, description: 'ID de la cita a eliminar' })
    @ApiResponse({ status: 200, description: 'Cita eliminada exitosamente.' })
    @ApiResponse({ status: 404, description: 'Cita no encontrada.' })
    remove(@Param('id') id: string) {
        return this.citasService.remove(+id);
    }
}
