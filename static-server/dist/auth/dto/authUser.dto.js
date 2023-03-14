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
exports.AuthUserDto = exports.ChangePassDto = exports.RecoveryPassDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RecoveryPassDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'vasya_vseh_porvu@mail.ru',
        description: 'Почтовый ящик',
    }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Некоректный email' }),
    __metadata("design:type", String)
], RecoveryPassDto.prototype, "email", void 0);
exports.RecoveryPassDto = RecoveryPassDto;
class ChangePassDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Пароль',
        description: 'Пароль',
    }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    (0, class_validator_1.Length)(8, 100, { message: 'Не менее 8 символов' }),
    __metadata("design:type", String)
], ChangePassDto.prototype, "password", void 0);
exports.ChangePassDto = ChangePassDto;
class AuthUserDto extends RecoveryPassDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Пароль',
        description: 'Пароль',
    }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    (0, class_validator_1.Length)(8, 100, { message: 'Не менее 8 символов' }),
    __metadata("design:type", String)
], AuthUserDto.prototype, "password", void 0);
exports.AuthUserDto = AuthUserDto;
//# sourceMappingURL=authUser.dto.js.map