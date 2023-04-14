import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'articles' })
export class Article extends Model<Article, IArticle> {
  @ApiProperty({
    example: 'Шпроты',
    description: 'Заголовок статьи',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  title: string;

  @ApiProperty({
    example: 'Lorem ipsum ...',
    description: 'Текст статьи',
  })
  @Column({
    type: DataType.STRING(2000),
    allowNull: false,
    defaultValue: '',
  })
  text: string;

  @ApiProperty({
    example: '/uploads/ddffd',
    description: 'Путь к изображению',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  src: string;
}
