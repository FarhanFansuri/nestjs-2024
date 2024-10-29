
import { Controller, Get, Query, Post, Body, Put, Param, Delete, Bind } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  create(@Body() body:any) {
    const name = body.name;
    const email = body.email;
    const age = body.age;
    return `
    name : ${name}
    email : ${email}
    age : ${age}
    `;
  }

  @Get()
  findAll() {
    return `list all of users`;
  }

  @Get(':id')
  findOne(@Param() param:any) {
    return `This action returns user with id ${param.id}`;
  }

  @Put(':id')
  update(@Param() param:any) {
    return `This action updates a user with id ${param.id}`;
  }

  @Delete(':id')
  remove(@Param() param:any) {
    return `This action removes a user with id ${param.id}`;
  }
}
