import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { FeedbackDto } from './dto/feedback.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendFeedback({ name, email, phone }: FeedbackDto) {
    try {
      await this.mailerService.sendMail({
        subject:
          'Потенциальный клиент заполнил форму обратной связи на мтэк.рф',
        template: 'feedback',
        context: {
          name,
          email,
          phone,
        },
      });
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) || 'Ошибка отправки формы',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
