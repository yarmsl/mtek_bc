import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthGuard } from 'src/lib/guards/auth.guard';
import LocalFilesInterceptor from 'src/lib/LocalFilesInterceptor';

import { FilesDto } from './dto/files.dto';
import { FilesService } from './files.service';
import { AdminGuard } from '../../lib/guards/admin.guard';

@Controller('files')
export class FilesController {
  constructor(private fileService: FilesService) {}

  @ApiOperation({ summary: 'Загрузка файла' })
  @ApiResponse({ status: 200, type: FilesDto })
  @UseGuards(AuthGuard, AdminGuard)
  @Post()
  @UseInterceptors(LocalFilesInterceptor({ fieldName: 'file', path: 'files' }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() dto: FilesDto) {
    return this.fileService.uploadFile(file, dto);
  }

  @ApiOperation({ summary: 'Удаление файла' })
  @ApiResponse({ status: 200 })
  @UseGuards(AuthGuard, AdminGuard)
  @Delete(':kind')
  deleteFile(@Param() params: { kind: string }) {
    return this.fileService.deleteFile(params.kind);
  }

  @ApiOperation({ summary: 'Получить все файлы' })
  @ApiResponse({ status: 200, type: Array<FilesDto> })
  @Get()
  getFilesInfo() {
    return this.fileService.getFilesInfo();
  }

  @ApiOperation({ summary: 'Скачать файл' })
  @ApiResponse({ status: 200 })
  @Get(':kind')
  getFile(
    @Param() params: { kind: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.fileService.getFile(params.kind, res);
  }
}
