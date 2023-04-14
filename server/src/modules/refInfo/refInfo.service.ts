import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { UpdateRefInfoDto } from './dto/updateRefInfo.dto';
import { RefInfo } from './refInfo.model';

@Injectable()
export class RefInfoService {
  constructor(
    @InjectModel(RefInfo) private refInfoRepository: typeof RefInfo,
  ) {}

  async updateRefInfo(dto: UpdateRefInfoDto) {
    try {
      const refInfo = await this.refInfoRepository.findOne();

      if (!refInfo) return await this.refInfoRepository.create(dto);
      return await refInfo.update(dto);
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) ||
          'Невозможно изменить справочную информацию',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async readRefInfo() {
    try {
      return await this.refInfoRepository.findOne();
    } catch (e) {
      throw new HttpException(
        (e instanceof Error && e.message) ||
          'Невозможно изменить справочную информацию',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
