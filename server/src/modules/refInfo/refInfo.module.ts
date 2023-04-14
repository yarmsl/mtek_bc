import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';

import { RefInfoController } from './refInfo.controller';
import { RefInfo } from './refInfo.model';
import { RefInfoService } from './refInfo.service';
import { AuthService } from '../auth/auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [RefInfoController],
  providers: [RefInfoService, AuthService, JwtService],
  imports: [SequelizeModule.forFeature([RefInfo]), UsersModule],
  exports: [RefInfoService],
})
export class RefInfoModule {}
