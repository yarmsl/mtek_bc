import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/modules/users/dto/createUser.dto';
import { User } from 'src/modules/users/users.model';
import { UsersService } from 'src/modules/users/users.service';

import { AuthUserDto } from './dto/authUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: CreateUserDto) {
    try {
      const candidate = await this.userService.getUserByEmail(signupDto.email);

      if (candidate) {
        throw new HttpException(
          'Пользователь с таким email существует',
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.userService.createUser(signupDto);

      return await this.generateTokens(user);
    } catch (e) {
      if (e instanceof HttpException) throw e;
      throw new UnauthorizedException('Ошибка регистрации пользователя');
    }
  }

  async signin(signinDto: AuthUserDto) {
    try {
      const user = await this.userService.validateUser(signinDto);
      return await this.generateTokens(user);
    } catch (e) {
      if (e instanceof UnauthorizedException) throw e;
      throw new UnauthorizedException('Ошибка авторизации пользователя');
    }
  }

  async check(authHeader: string) {
    try {
      const token = this.getBearerToken(authHeader);
      const { access_token } = await this.validateToken(token, 'refresh');
      const email = this.getEmailFromAccessToken(access_token);
      const user = await this.userService.getUserByEmail(email);
      return await this.generateTokens(user);
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
  }

  async refresh(authHeader: string) {
    try {
      const token = this.getBearerToken(authHeader);
      const email = this.getEmailFromAccessToken(token);
      const user = await this.userService.getUserByEmail(email);
      const access_token = await this.generateAccessToken(user);
      return { access_token };
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
  }

  private async generateTokens(user: Partial<User>) {
    const access_token = await this.generateAccessToken(user);
    const refresh_token = await this.generateRefreshToken(access_token);
    return {
      access_token,
      refresh_token,
    };
  }

  private async generateAccessToken(user: Partial<User>) {
    try {
      const { firstName, lastName, email, role } = user;
      return await this.jwtService.signAsync(
        {
          firstName,
          lastName,
          email,
          role,
        },
        {
          expiresIn: '1m',
          secret: process.env.JWT_ACCESS_SECRET,
        },
      );
    } catch (e) {
      throw new HttpException(
        'Ошибка генерации токена доступа',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async generateRefreshToken(access_token: string) {
    try {
      return await this.jwtService.signAsync(
        { access_token },
        {
          expiresIn: '30d',
          secret: process.env.JWT_REFRESH_SECRET,
        },
      );
    } catch (e) {
      throw new HttpException(
        'Ошибка генерации токена обновления',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async validateToken(token: string, tokenType: tokenType) {
    try {
      const verified = await this.jwtService.verifyAsync(token, {
        secret:
          tokenType === 'access'
            ? process.env.JWT_ACCESS_SECRET
            : process.env.JWT_REFRESH_SECRET,
      });
      return verified;
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
  }

  private getBearerToken(authHeader: string): string {
    const bearer = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];
    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
    return token;
  }

  private getEmailFromAccessToken(access_token: string): string {
    const userData = this.jwtService.decode(access_token);
    if (typeof userData !== 'string' && 'email' in userData) {
      return userData.email;
    } else {
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
  }
}
