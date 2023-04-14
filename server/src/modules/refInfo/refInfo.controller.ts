import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/lib/guards/auth.guard';

import { UpdateRefInfoDto } from './dto/updateRefInfo.dto';
import { RefInfoService } from './refInfo.service';
import { AdminGuard } from '../../lib/guards/admin.guard';

@Controller('refInfo')
export class RefInfoController {
  constructor(private refInfoService: RefInfoService) {}

  @ApiOperation({ summary: 'Изменение справочной информации' })
  @ApiResponse({ status: 201, type: UpdateRefInfoDto })
  @UseGuards(AuthGuard, AdminGuard)
  @Put()
  update(@Body() refInfoDto: UpdateRefInfoDto) {
    return this.refInfoService.updateRefInfo(refInfoDto);
  }

  @ApiOperation({ summary: 'Получение справочной информации' })
  @ApiResponse({ status: 200, type: UpdateRefInfoDto })
  @Get()
  read() {
    return this.refInfoService.readRefInfo();
  }
}
