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
        const { send_mail, send_mail_password, get_mail } =
          await refInfoService.readRefInfo();
        return {
          transport: {
            service: process.env.NODEMAILER_SERVICE,
            secure: true,

            auth: {
              user: send_mail,
              pass: atob(send_mail_password),
            },
          },
          defaults: {
            to: get_mail,
            from: send_mail,
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
