import { GoogleAuthCredits } from './dto/google-auth.credits';
import { GoogleAuthService } from './google-auth.service';
export declare class GoogleAuthController {
    private readonly googleAuthService;
    constructor(googleAuthService: GoogleAuthService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: {
        user: GoogleAuthCredits;
    }): Promise<{
        url: string;
        statusCode: number;
    }>;
}
