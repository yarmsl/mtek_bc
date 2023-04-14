import { createReadStream, existsSync, unlinkSync } from 'fs';

import {
  HttpException,
  HttpStatus,
  Injectable,
  StreamableFile,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Response } from 'express';

import { FilesDto } from './dto/files.dto';
import { File } from './files.model';

@Injectable()
export class FilesService {
  constructor(@InjectModel(File) private filesRepository: typeof File) {}

  async uploadFile(file: Express.Multer.File, dto: FilesDto) {
    try {
      const { originalname, filename, size, path } = file;
      const existFile = await this.filesRepository.findOne({
        where: { kind: dto.kind },
      });

      if (existFile) {
        if (existsSync(existFile.path)) unlinkSync(existFile.path);

        return await existFile.update({
          kind: dto.kind,
          originalname,
          filename,
          size,
          path,
        });
      }

      return await this.filesRepository.create({
        kind: dto.kind,
        originalname,
        filename,
        size,
        path,
      });
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) || 'Невозможно загрузить файл',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteFile(kind: string) {
    try {
      const candidate = await this.filesRepository.findOne({ where: { kind } });
      if (!candidate) throw new Error();
      if (existsSync(candidate.path)) unlinkSync(candidate.path);
      return await candidate.destroy();
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) || 'Файла не существует',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async getFilesInfo() {
    try {
      return await this.filesRepository.findAll();
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) ||
          'Невозможно получить информацию о файлах',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async getFile(kind: string, res: Response) {
    try {
      const file = await this.filesRepository.findOne({ where: { kind } });
      if (!file) throw new Error('Файл отсутствует');
      const readStream = createReadStream(file.path);

      res.set({
        'Content-Disposition': `attachment; filename="${file.originalname}"`,
      });

      return new StreamableFile(readStream);
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) || 'Невозможно получить файл',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
