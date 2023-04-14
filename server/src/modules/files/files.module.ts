import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';

import { FilesController } from './files.controller';
import { File } from './files.model';
import { FilesService } from './files.service';
import { AuthService } from '../auth/auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService, AuthService, JwtService],
  imports: [SequelizeModule.forFeature([File]), UsersModule],
  exports: [FilesService],
})
export class FilesModule {}
