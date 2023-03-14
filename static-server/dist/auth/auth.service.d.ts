import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { AuthUserDto, ChangePassDto, RecoveryPassDto } from './dto/authUser.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    private mailService;
    constructor(userService: UsersService, jwtService: JwtService, mailService: MailService);
    signup(signupDto: CreateUserDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signin(signinDto: AuthUserDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    check(authHeader: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh(authHeader: string): Promise<{
        access_token: string;
    }>;
    recoveryPass(recoveryPassDto: RecoveryPassDto): Promise<{
        message: string;
    }>;
    redirectToPassChange(access_token: string): Promise<{
        url: string;
        statusCode: number;
    }>;
    changePassword(passDto: ChangePassDto, access_token: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    generateTokens(user: User, account_type: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    generateAccessToken(user: User, account_type: string): Promise<string>;
    private generateRefreshToken;
    private validateToken;
    private bearerToken;
    private getEmailFromAccessToken;
}
