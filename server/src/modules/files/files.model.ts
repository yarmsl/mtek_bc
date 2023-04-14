import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'ref_files_repo' })
export class File extends Model<File, IFile> {
  @ApiProperty({
    example: 'имя-файла.пдф',
    description: 'Имя файла',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  kind: string;
  @ApiProperty({
    example: 'имя-файла.пдф',
    description: 'Имя файла',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  originalname: string;

  @ApiProperty({
    example: 'timestamp-имя-файла.пдф',
    description: 'Имя файла с временной меткой',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  filename: string;

  @ApiProperty({
    example: '/path-to-file',
    description: 'путь к файлу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  path: string;

  @ApiProperty({
    example: 777666333,
    description: 'Размер файла',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  size: number;
}
