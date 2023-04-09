import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'refinfo' })
export class RefInfo extends Model<RefInfo, IRefInfo> {
  @ApiProperty({
    example: true,
    description: 'Переключатель отрисовки кнопки личного кабинета',
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  personalArea_isShow: boolean;

  @ApiProperty({
    example: 'https://example.com',
    description: 'Внешняя ссылка на личный кабинет',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  personalArea_externalLink: string;

  @ApiProperty({
    example: '+792938334455',
    description: 'Номер телефона менеджера',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  manager_phoneNumber: string;

  @ApiProperty({
    example: 'ООО "Организация"',
    description: 'Наавание организации',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  organization_name: string;

  @ApiProperty({
    example: '3243254353453',
    description: 'ИНН организации',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  organization_inn: string;

  @ApiProperty({
    example: '3243254353453',
    description: 'КПП организации',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  organization_kpp: string;

  @ApiProperty({
    example: 'Челябинская обл',
    description: 'Область, округ и пр.',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  address_area: string;

  @ApiProperty({
    example: 'г. Челябинск',
    description: 'город, село, поселок городского типа',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  address_city: string;

  @ApiProperty({
    example: 'пр. Ленина',
    description: 'улица, проспект, закоулок и пр.',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  address_street: string;

  @ApiProperty({
    example: 'д. 171717',
    description: 'номер дома, избы, дворца и пр.',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  address_house: string;

  @ApiProperty({
    example: 'офис 100',
    description: 'номер квартиры, офиса и т.д.',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  address_office: string;

  @ApiProperty({
    example: 'mail@mail.ru',
    description: 'Почтовый адрес основной',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  mail: string;

  @ApiProperty({
    example: '892934(13)3434',
    description: 'Номер телефона основной',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  phoneNumber: string;
}
