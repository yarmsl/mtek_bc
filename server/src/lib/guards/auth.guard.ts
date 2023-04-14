import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    try {
      const req = context.switchToHttp().getRequest();
      if (!req.headers.authorization) throw new Error();

      const [tokenType, token] = req.headers.authorization.split(' ');

      if (tokenType !== 'Bearer' || !token)
        throw new Error('Токен отсутствует или неверный тип');
      const user = await this.authService.validateToken(token, 'access');
      req.user = user;

      return true;
    } catch (e) {
      throw new UnauthorizedException({
        message:
          (e instanceof Error && e.message) || 'Пользователь не авторизован',
      });
    }
  }
}
