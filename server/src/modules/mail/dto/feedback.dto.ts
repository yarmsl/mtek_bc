import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class FeedbackDto implements IFeedback {
  @ApiProperty({
    example: 'Василий Пупкин Афанасьевич',
    description: 'ФИО',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @ApiProperty({
    example: 'vasya_vseh_porvu@mail.ru',
    description: 'Почтовый ящик',
  })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @ApiProperty({
    example: 'Пароль',
    description: 'Пароль',
  })
  @IsString({ message: 'Должно быть строкой' })
  @Length(6, 100, { message: 'Не менее 6 символов' })
  readonly phone: string;
}
