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
exports.GoogleAuthCredits = void 0;
const swagger_1 = require("@nestjs/swagger");
class GoogleAuthCredits {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'vasya_vseh_porvu@gmail.com',
        description: 'Почтовый ящик',
    }),
    __metadata("design:type", String)
], GoogleAuthCredits.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Василий',
        description: 'Имя пользователя',
    }),
    __metadata("design:type", String)
], GoogleAuthCredits.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Пупыркин',
        description: 'Фамилия пользователя',
    }),
    __metadata("design:type", String)
], GoogleAuthCredits.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://lh3.googleusercontent.com/a-/...',
        description: 'Ссылка на гугл аву',
    }),
    __metadata("design:type", String)
], GoogleAuthCredits.prototype, "picture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ya29.A0ARrdaM9Spyz2MtQZGtb_Yl...',
        description: 'Токен гугла',
    }),
    __metadata("design:type", String)
], GoogleAuthCredits.prototype, "access_token", void 0);
exports.GoogleAuthCredits = GoogleAuthCredits;
//# sourceMappingURL=google-auth.credits.js.map