import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ArticleDto implements Omit<IArticle, 'src'> {
  @ApiProperty({
    example: 'Шпроты',
    description: 'Заголовок статьи',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;

  @ApiProperty({
    example: 'Lorem ipsum ...',
    description: 'Текст статьи',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly text: string;

  @ApiProperty({
    example: 'Файл',
    description: 'Изображение',
  })
  readonly src: string;
}
