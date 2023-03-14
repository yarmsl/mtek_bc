import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User, IUser> {
  @ApiProperty({
    example: 'Василий',
    description: 'Имя пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @ApiProperty({
    example: 'Пупыркин',
    description: 'Фамилия пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @ApiProperty({
    example: 'vasya_vseh_porvu@mail.ru',
    description: 'Почтовый ящик',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: '/avatar.jpg',
    description: 'Путь к фотке',
  })
  @Column({
    type: DataType.STRING(1000),
    allowNull: true,
  })
  photo: string;

  @ApiProperty({
    example: 'Пароль',
    description: 'Пароль',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: 'user',
    description: 'Роль пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;
}
