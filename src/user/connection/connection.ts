import { Injectable } from '@nestjs/common';



export class Connection {
    getConnect():string{
        return null;
    }
}

@Injectable()
export class MySqlConnection extends Connection{
    getConnect(): string {
        return "MySQL"
    }
}

@Injectable()
export class MongoDBConnection extends Connection{
    getConnect(): string {
        return "MongoDB"
    }
}
