import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { Article } from './modules/articles/articles.model';
import { ArticlesModule } from './modules/articles/articles.module';
import { AuthModule } from './modules/auth/auth.module';
import { File } from './modules/files/files.model';
import { FilesModule } from './modules/files/files.module';
import { MailModule } from './modules/mail/mail.module';
import { RefInfo } from './modules/refInfo/refInfo.model';
import { RefInfoModule } from './modules/refInfo/refInfo.module';
import { User } from './modules/users/users.model';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, RefInfo, File, Article],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    RefInfoModule,
    MailModule,
    FilesModule,
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
