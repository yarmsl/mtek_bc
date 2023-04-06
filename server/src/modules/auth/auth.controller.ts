import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import LocalFilesInterceptor from 'src/lib/LocalFilesInterceptor';
import { CreateUserDto } from 'src/modules/users/dto/createUser.dto';

import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/authUser.dto';
import { AccessTokenRes, TokensRes } from './dto/tokenRes.credits';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: 'Регистрация' })
  @ApiResponse({ status: 200, type: TokensRes })
  @Post('signup')
  signup(@Body() signupDto: CreateUserDto) {
    return this.authService.signup(signupDto);
  }

  @ApiOperation({ summary: 'Авторизация' })
  @ApiResponse({ status: 200, type: TokensRes })
  // @UseGuards(AdminGuard)
  @Post('signin')
  signin(@Body() signinDto: AuthUserDto) {
    return this.authService.signin(signinDto);
  }

  @ApiOperation({ summary: 'Проверка авторизации' })
  @ApiResponse({ status: 200, type: TokensRes })
  @Get('check')
  check(@Headers('authorization') authHeader: string) {
    return this.authService.check(authHeader);
  }

  @ApiOperation({ summary: 'Обновление токена' })
  @ApiResponse({ status: 200, type: AccessTokenRes })
  @Get('refresh')
  refresh(@Headers('authorization') authHeader: string) {
    return this.authService.refresh(authHeader);
  }

  @Post('test')
  @UseInterceptors(LocalFilesInterceptor({ fieldName: 'img', path: 'test' }))
  uploadFile(@UploadedFile() img, @Body() body) {
    console.log(img);
    return { img: img.path, ...body };
  }
}
