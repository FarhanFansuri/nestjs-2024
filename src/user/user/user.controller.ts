import { Controller, Get, HttpCode, Param, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService, UserService2 } from './user.service';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';
import { UserRepository } from '../user-repository/user-repository';

@Controller('/api/users')
export class UserController {
    constructor(
        private userServices : UserService, 
        private userService2 : UserService2,
        private connection : Connection,
        private mailService : MailService,
        private userRepository : UserRepository
    ){}
    @Get("/hello")
    hello() :string{
        return  this.userServices.sayHello('Nana');
    }

    @Get("/hello2")
    hello2() :string{
        return  this.userService2.sayHello2('Nana2');
    }

    @Get("/connection")
    connect() : string{
        this.userRepository.save()
        this.mailService.send()
        return this.connection.getConnect()
    }

    @Get("/set-cookie")
    setCookie(@Query('name') name: string, @Res() response: Response){
         response.cookie('name',name)
         response.status(200).send("Succed")
    }

    @Get("/get-cookie")
    getCookie(@Req() request: Request){
         return request.cookies['name']
    }

    @Get("/id/:id")
    @HttpCode(200)
    h(@Param("id") id:string):string{
        return `the id is ${id}`
    }
}
