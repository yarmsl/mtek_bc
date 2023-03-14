"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthService = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const auth_service_1 = require("../auth/auth.service");
const users_service_1 = require("../users/users.service");
let GoogleAuthService = class GoogleAuthService extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor(userService, authService) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['email', 'profile'],
        });
        this.userService = userService;
        this.authService = authService;
    }
    async validate(access_token, refresh_token, profile, done) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            access_token,
        };
        done(null, user);
    }
    async googleLogin(req) {
        if (!req.user) {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
        try {
            const user = await this.googleUser(req.user);
            const { access_token, refresh_token } = await this.authService.generateTokens(user, 'google');
            return {
                url: `${process.env.FRONT_URI}/authprovider/${access_token}/${refresh_token}`,
                statusCode: 302,
            };
        }
        catch (e) {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
    }
    async googleUser(googleUser) {
        const { email, picture, firstName, lastName } = googleUser;
        const candidate = await this.userService.getUserByEmail(email);
        if (candidate) {
            candidate.photo = picture;
            await candidate.save();
            return candidate;
        }
        else {
            const password = await this.userService.hashPassword(`${email}`);
            const user = await this.userService.createUser({
                email,
                password,
                firstName,
                lastName,
                photo: picture,
                role: 'user',
            });
            return user;
        }
    }
};
GoogleAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], GoogleAuthService);
exports.GoogleAuthService = GoogleAuthService;
//# sourceMappingURL=google-auth.service.js.map