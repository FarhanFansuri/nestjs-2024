import { Controller, Get, Post , Put, Patch, Param, Body, HttpCode} from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "All Prppert"
    }

    @Get(":id/:nama")
    
    findOne(@Param()id){
        return id
    }

    @Post()
    @HttpCode(202)
    create(@Body("id") id):any{
        return id
    }
}
