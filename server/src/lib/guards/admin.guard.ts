import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    try {
      const [tokenType, token] = req.headers.authorization.split(' ');

      if (tokenType !== 'Bearer' || !token) throw new Error();
      const user = await this.authService.validateToken(token, 'access');

      if (user.role !== 'admin') throw new Error();

      req.user = user;

      return true;
    } catch (e) {
      throw new HttpException('Недостаточно прав', HttpStatus.FORBIDDEN);
    }
  }
}
