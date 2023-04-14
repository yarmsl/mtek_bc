import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class DeleteUserDto {
  @ApiProperty({
    example: 'vasya_vseh_porvu@mail.ru',
    description: 'Почтовый ящик',
  })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;
}
