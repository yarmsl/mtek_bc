import { join } from 'path';

import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { RefInfoModule } from '../refInfo/refInfo.module';
import { RefInfoService } from '../refInfo/refInfo.service';

@Module({
  controllers: [MailController],
  imports: [
    MailerModule.forRootAsync({
      imports: [RefInfoModule],
      inject: [RefInfoService],
      useFactory: async (refInfoService: RefInfoService) => {
        const refInfo = await refInfoService.readRefInfo();
        return {
          transport: {
            service: process.env.NODEMAILER_SERVICE,
            secure: true,

            auth: {
              user: refInfo?.send_mail,
              pass: atob(refInfo?.send_mail_password),
            },
          },
          defaults: {
            to: refInfo?.get_mail,
            from: refInfo?.send_mail,
          },
          template: {
            dir: join(__dirname, 'templates'),
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
