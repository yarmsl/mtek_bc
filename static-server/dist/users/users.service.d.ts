import { AuthUserDto } from 'src/auth/dto/authUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './users.model';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    hashPassword(pass: string): Promise<string>;
    hashedPassDto(dto: CreateUserDto): Promise<CreateUserDto>;
    validateUser(dto: AuthUserDto): Promise<User>;
}
