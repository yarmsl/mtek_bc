import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/users/users.model';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendRecoveryPassMail(user: User, access_token: string): Promise<void>;
}
