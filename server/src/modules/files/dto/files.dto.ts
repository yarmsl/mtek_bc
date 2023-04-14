import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FilesDto implements IFilesDto {
  @ApiProperty({
    example: 'companyPres',
    description: 'Идентификатор файла',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly kind: string;
}
