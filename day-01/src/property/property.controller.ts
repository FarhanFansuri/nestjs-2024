import { Controller, Get, Post , Put, Patch, Param} from '@nestjs/common';

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
    create(){
        return "Creat function"
    }
}
