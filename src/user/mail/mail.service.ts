import { Injectable } from '@nestjs/common';

// @Injectable()
export class MailService {
    send(){
        console.info("mail sended")
    }
}

export const newMail = new MailService()
