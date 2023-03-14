import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { GoogleAuthCredits } from './dto/google-auth.credits';
declare const GoogleAuthService_base: new (...args: any[]) => Strategy;
export declare class GoogleAuthService extends GoogleAuthService_base {
    private userService;
    private authService;
    constructor(userService: UsersService, authService: AuthService);
    validate(access_token: string, refresh_token: string, profile: any, done: VerifyCallback): Promise<any>;
    googleLogin(req: {
        user: GoogleAuthCredits;
    }): Promise<{
        url: string;
        statusCode: number;
    }>;
    private googleUser;
}
export {};
