import { existsSync, unlinkSync } from 'fs';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Article } from './articles.model';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article) private articlesRepository: typeof Article,
  ) {}

  async createArticle(dto: ArticleDto, src: string) {
    try {
      return await this.articlesRepository.create({ ...dto, src });
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) || 'Не удалось сохранить статью',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async readArticles() {
    try {
      return await this.articlesRepository.findAll({
        order: [['id', 'ASC']],
      });
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) || 'Не удалось получить статьи',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateArticle(id: string, dto: Partial<ArticleDto>, src?: string) {
    try {
      const candidate = await this.articlesRepository.findOne({
        where: { id },
      });

      if (!candidate) throw new Error();
      if (src && existsSync(candidate.src)) unlinkSync(candidate.src);

      return await candidate.update({ ...dto, src });
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) || 'Не удалось обновить статьи',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteArticle(id: string) {
    try {
      const candidate = await this.articlesRepository.findOne({
        where: { id },
      });
      if (!candidate) throw new Error();
      if (existsSync(candidate.src)) unlinkSync(candidate.src);
      return await candidate.destroy();
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) || 'Не удалось удалить статью',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
