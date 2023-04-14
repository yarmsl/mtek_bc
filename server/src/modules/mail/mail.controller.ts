import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { FeedbackDto } from './dto/feedback.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}
  @ApiOperation({ summary: 'Отправка данных с формы обратной связи' })
  @ApiResponse({ status: 200, type: HttpException })
  @Post('feedback')
  sendFeedback(@Body() feedbackDto: FeedbackDto) {
    return this.mailService.sendFeedback(feedbackDto);
  }
}
