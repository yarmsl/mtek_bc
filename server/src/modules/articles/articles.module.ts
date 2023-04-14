import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';

import { ArticlesController } from './articles.controller';
import { Article } from './articles.model';
import { ArticlesService } from './articles.service';
import { AuthService } from '../auth/auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, AuthService, JwtService],
  imports: [SequelizeModule.forFeature([Article]), UsersModule],
  exports: [ArticlesService],
})
export class ArticlesModule {}
