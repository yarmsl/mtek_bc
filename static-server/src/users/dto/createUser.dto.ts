import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto implements IUser {
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
    example: 'user',
    description: 'Роль пользователя',
  })
  readonly role: string;

  @ApiProperty({
    example: '/avatar.jpg',
    description: 'Путь к фотке',
  })
  readonly photo?: string;
}
