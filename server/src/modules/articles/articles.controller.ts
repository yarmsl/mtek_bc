import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthGuard } from 'src/lib/guards/auth.guard';
import LocalFilesInterceptor from 'src/lib/LocalFilesInterceptor';

import { Article } from './articles.model';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';
import { AdminGuard } from '../../lib/guards/admin.guard';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @ApiOperation({ summary: 'Создание статьи' })
  @ApiResponse({ status: 200, type: Article })
  @UseGuards(AuthGuard, AdminGuard)
  @Post()
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'src', path: 'articles' }),
  )
  createArticle(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: ArticleDto,
  ) {
    return this.articlesService.createArticle(dto, file.path);
  }

  @ApiOperation({ summary: 'Получение статей' })
  @ApiResponse({ status: 200, type: Array<Article> })
  @Get()
  readArticles() {
    return this.articlesService.readArticles();
  }

  @ApiOperation({ summary: 'Удаление статьи' })
  @ApiResponse({ status: 200 })
  @UseGuards(AuthGuard, AdminGuard)
  @Delete(':id')
  deleteArticle(@Param() params: { id: string }) {
    return this.articlesService.deleteArticle(params.id);
  }

  @ApiOperation({ summary: 'Редактирование статьи' })
  @ApiResponse({ status: 200, type: Article })
  @UseGuards(AuthGuard, AdminGuard)
  @Put(':id')
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'src', path: 'articles' }),
  )
  updateArticle(
    @Param() params: { id: string },
    @Body() dto?: Partial<ArticleDto>,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.articlesService.updateArticle(params.id, dto, file?.path);
  }
}
