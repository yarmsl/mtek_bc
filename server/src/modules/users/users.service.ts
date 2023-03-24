import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { compare, hash } from 'bcryptjs';
import { AuthUserDto } from 'src/modules/auth/dto/authUser.dto';

import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    if (dto.secret === process.env.SECRET_PHRASE)
      Object.assign(dto, { role: 'user' });
    else if (dto.secret === `${process.env.SECRET_PHRASE}_admin`)
      Object.assign(dto, { role: 'admin' });
    else
      throw new HttpException(
        'Неверное секретное слово',
        HttpStatus.BAD_REQUEST,
      );

    const hashedPassword = await hash(dto.password, 10);

    const fullUser = await this.userRepository.create({
      ...dto,
      password: hashedPassword,
    });
    const { firstName, lastName, email, role } = fullUser;

    return { firstName, lastName, email, role };
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async validateUser(dto: AuthUserDto) {
    try {
      const user = await this.getUserByEmail(dto.email);
      if (!user) {
        throw new Error();
      }
      const isPasswordsEquals = await compare(dto.password, user.password);
      if (isPasswordsEquals) {
        const { firstName, lastName, email, role } = user;

        return { firstName, lastName, email, role };
      }
      throw new Error();
    } catch {
      throw new UnauthorizedException({
        message: 'Некоректный email или пароль',
      });
    }
  }

  async deleteUser(dto: DeleteUserDto) {
    const candidate = await this.getUserByEmail(dto.email);
    if (!candidate)
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);

    await candidate.destroy();
  }
}
