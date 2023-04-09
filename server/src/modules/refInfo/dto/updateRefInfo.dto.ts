import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsBoolean } from 'class-validator';

export class UpdateRefInfoDto implements IRefInfo {
  @ApiProperty({
    example: true,
    description: 'Переключатель отрисовки кнопки личного кабинета',
  })
  readonly personalArea_isShow: boolean;

  @ApiProperty({
    example: 'https://example.com',
    description: 'Внешняя ссылка на личный кабинет',
  })
  readonly personalArea_externalLink: string;

  @ApiProperty({
    example: '+792938334455',
    description: 'Номер телефона менеджера',
  })
  readonly manager_phoneNumber: string;

  @ApiProperty({
    example: 'ООО "Организация"',
    description: 'Наавание организации',
  })
  readonly organization_name: string;

  @ApiProperty({
    example: '3243254353453',
    description: 'ИНН организации',
  })
  readonly organization_inn: string;

  @ApiProperty({
    example: '3243254353453',
    description: 'КПП организации',
  })
  readonly organization_kpp: string;

  @ApiProperty({
    example: 'Челябинская обл',
    description: 'Область, округ и пр.',
  })
  readonly address_area: string;

  @ApiProperty({
    example: 'г. Челябинск',
    description: 'город, село, поселок городского типа',
  })
  readonly address_city: string;

  @ApiProperty({
    example: 'пр. Ленина',
    description: 'улица, проспект, закоулок и пр.',
  })
  readonly address_street: string;

  @ApiProperty({
    example: 'д. 171717',
    description: 'номер дома, избы, дворца и пр.',
  })
  readonly address_house: string;

  @ApiProperty({
    example: 'офис 100',
    description: 'номер квартиры, офиса и т.д.',
  })
  readonly address_office: string;

  @ApiProperty({
    example: '892934(13)3434',
    description: 'Номер телефона основной',
  })
  readonly phoneNumber: string;

  @ApiProperty({
    example: 'mail@mail.ru',
    description: 'Почтовый адрес основной',
  })
  readonly mail: string;
}
