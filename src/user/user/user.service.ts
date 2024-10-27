import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    sayHello(name:string):string{
        return `Hello ${name}`
    }
}

@Injectable()
export class UserService2 {
    sayHello2(name:string):string{
        return `Hello ${name}`
    }
}
