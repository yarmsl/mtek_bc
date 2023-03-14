import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { AuthService } from './auth.service';
import { AuthUserDto, ChangePassDto, RecoveryPassDto } from './dto/authUser.dto';
import { AccessTokenRes } from './dto/tokenRes.credits';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    recovery(recoveryPassDto: RecoveryPassDto): Promise<{
        message: string;
    }>;
    redirectToPassChange(params: AccessTokenRes): Promise<{
        url: string;
        statusCode: number;
    }>;
    changePassword(access_token: string, passwordDto: ChangePassDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
