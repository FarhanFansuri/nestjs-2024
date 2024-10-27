import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';

// @Injectable()
export class UserRepository {
    connection : Connection

    save(){
        console.info(`save with database ${this.connection.getConnect()}`)
    }
}

export function createUserRepository(connection : Connection):UserRepository {
    const userRepo = new UserRepository()
    userRepo.connection = connection
    return userRepo
}
