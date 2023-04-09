import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from './modules/auth/auth.module';
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
      models: [User, RefInfo],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    MailModule,
    RefInfoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
