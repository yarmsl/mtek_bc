import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();

    if (!req.user)
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });

    if (req.user.role !== 'admin')
      throw new HttpException('Недостаточно прав', HttpStatus.FORBIDDEN);

    return true;
  }
}
