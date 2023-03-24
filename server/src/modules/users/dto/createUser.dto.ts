import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Василий',
    description: 'Имя пользователя',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly firstName: string;

  @ApiProperty({
    example: 'Пупыркин',
    description: 'Фамилия пользователя',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly lastName: string;

  @ApiProperty({
    example: 'vasya_vseh_porvu@mail.ru',
    description: 'Почтовый ящик',
  })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некоректный email' })
  readonly email: string;

  @ApiProperty({
    example: 'Пароль',
    description: 'Пароль',
  })
  @IsString({ message: 'Должно быть строкой' })
  @Length(8, 100, { message: 'Не менее 8 символов' })
  readonly password: string;

  @ApiProperty({
    example: '@#@#4',
    description: 'Секретная фраза',
  })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 100, { message: 'Не менее 4 символов' })
  readonly secret: string;
}
