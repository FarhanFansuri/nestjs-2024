import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService, UserService2 } from './user/user.service';
import { Connection, MongoDBConnection, MySqlConnection } from './connection/connection';
import { MailService, newMail } from './mail/mail.service';
import { createUserRepository, UserRepository } from './user-repository/user-repository';
import { MemberService } from './member/member.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserService2, 
    {
      provide: Connection,
      useClass: process.env.DB == 'MySQL' ? MySqlConnection : MongoDBConnection
    }, 
    {
      provide : MailService,
      useValue: newMail
    }, 
    { 
      provide:UserRepository,
      useFactory:createUserRepository,
      inject:[Connection]
    }, MemberService
    ]
})
export class UserModule {}
