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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, mailService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async signup(signupDto) {
        const candidate = await this.userService.getUserByEmail(signupDto.email);
        if (candidate) {
            throw new common_1.HttpException('Пользователь с таким email существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const userDto = await this.userService.hashedPassDto(signupDto);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { role: 'user' }));
        const { access_token, refresh_token } = await this.generateTokens(user, 'email');
        return {
            access_token,
            refresh_token,
        };
    }
    async signin(signinDto) {
        const user = await this.userService.validateUser(signinDto);
        return await this.generateTokens(user, 'email');
    }
    async check(authHeader) {
        try {
            const token = this.bearerToken(authHeader);
            const { access_token } = await this.validateToken(token, 'refresh');
            const email = this.getEmailFromAccessToken(access_token);
            const user = await this.userService.getUserByEmail(email);
            return await this.generateTokens(user, 'email');
        }
        catch (e) {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
    }
    async refresh(authHeader) {
        try {
            const token = this.bearerToken(authHeader);
            const email = this.getEmailFromAccessToken(token);
            const user = await this.userService.getUserByEmail(email);
            const access_token = await this.generateAccessToken(user, 'email');
            return { access_token };
        }
        catch (e) {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
    }
    async recoveryPass(recoveryPassDto) {
        const user = await this.userService.getUserByEmail(recoveryPassDto.email);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        const access_token = await this.generateAccessToken(user, 'email');
        try {
            await this.mailService.sendRecoveryPassMail(user, access_token);
            return { message: 'Проверьте вашу почту' };
        }
        catch (e) {
            throw new common_1.HttpException('Ошибка отправки email', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async redirectToPassChange(access_token) {
        try {
            const { email } = await this.validateToken(access_token, 'access');
            const user = await this.userService.getUserByEmail(email);
            const token = await this.generateAccessToken(user, 'email');
            return {
                url: `${process.env.FRONT_URI}/new_password/${token}`,
                statusCode: 302,
            };
        }
        catch (e) {
            throw new common_1.UnauthorizedException({
                message: 'Время действия запроса истекло',
            });
        }
    }
    async changePassword(passDto, access_token) {
        try {
            const token = this.bearerToken(access_token);
            const { email } = await this.validateToken(token, 'access');
            const user = await this.userService.getUserByEmail(email);
            user.password = await this.userService.hashPassword(passDto.password);
            await user.save();
            return await this.generateTokens(user, 'email');
        }
        catch (e) {
            throw new common_1.UnauthorizedException({
                message: 'Время действия запроса истекло',
            });
        }
    }
    async generateTokens(user, account_type) {
        const access_token = await this.generateAccessToken(user, account_type);
        const refresh_token = await this.generateRefreshToken(access_token);
        return {
            access_token,
            refresh_token,
        };
    }
    async generateAccessToken(user, account_type) {
        try {
            const { id, firstName, lastName, photo, email, role } = user;
            return await this.jwtService.signAsync({
                id,
                firstName,
                lastName,
                photo,
                email,
                role,
                account_type,
            }, {
                expiresIn: '1h',
                secret: process.env.JWT_ACCESS_SECRET,
            });
        }
        catch (e) {
            throw new common_1.HttpException('Ошибка генерации токена доступа', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async generateRefreshToken(access_token) {
        try {
            return await this.jwtService.signAsync({ access_token }, {
                expiresIn: '30d',
                secret: process.env.JWT_REFRESH_SECRET,
            });
        }
        catch (e) {
            throw new common_1.HttpException('Ошибка генерации токена обновления', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async validateToken(token, tokenType) {
        try {
            const verified = await this.jwtService.verifyAsync(token, {
                secret: tokenType === 'access'
                    ? process.env.JWT_ACCESS_SECRET
                    : process.env.JWT_REFRESH_SECRET,
            });
            return verified;
        }
        catch (e) {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
    }
    bearerToken(authHeader) {
        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];
        if (bearer !== 'Bearer' || !token) {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
        return token;
    }
    getEmailFromAccessToken(access_token) {
        const userData = this.jwtService.decode(access_token);
        if (typeof userData !== 'string' && 'email' in userData) {
            return userData.email;
        }
        else {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map