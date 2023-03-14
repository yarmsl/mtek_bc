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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createUser_dto_1 = require("../users/dto/createUser.dto");
const auth_service_1 = require("./auth.service");
const authUser_dto_1 = require("./dto/authUser.dto");
const responseMessage_credits_1 = require("./dto/responseMessage.credits");
const tokenRes_credits_1 = require("./dto/tokenRes.credits");
const validation_pipe_1 = require("./validation.pipe");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(signupDto) {
        return this.authService.signup(signupDto);
    }
    signin(signinDto) {
        return this.authService.signin(signinDto);
    }
    check(authHeader) {
        return this.authService.check(authHeader);
    }
    refresh(authHeader) {
        return this.authService.refresh(authHeader);
    }
    recovery(recoveryPassDto) {
        return this.authService.recoveryPass(recoveryPassDto);
    }
    redirectToPassChange(params) {
        return this.authService.redirectToPassChange(params.access_token);
    }
    changePassword(access_token, passwordDto) {
        return this.authService.changePassword(passwordDto, access_token);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Регистрация' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tokenRes_credits_1.TokensRes }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Авторизация' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tokenRes_credits_1.TokensRes }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authUser_dto_1.AuthUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Проверка авторизации' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tokenRes_credits_1.TokensRes }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Get)('check'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "check", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление токена' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tokenRes_credits_1.AccessTokenRes }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Get)('refresh'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Запрос на восстановление пароля' }),
    (0, swagger_1.ApiResponse)({ status: 202, type: responseMessage_credits_1.responseMessage }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)('recovery'),
    (0, common_1.HttpCode)(202),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authUser_dto_1.RecoveryPassDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "recovery", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Запрос на перенаправление на страницу смены пароля',
    }),
    (0, swagger_1.ApiResponse)({ status: 302 }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Get)('recovery/:access_token'),
    (0, common_1.Redirect)(`${process.env.FRONT_URI}`, 302),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tokenRes_credits_1.AccessTokenRes]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "redirectToPassChange", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Смена пароля' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tokenRes_credits_1.TokensRes }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)('change/password'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, authUser_dto_1.ChangePassDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map