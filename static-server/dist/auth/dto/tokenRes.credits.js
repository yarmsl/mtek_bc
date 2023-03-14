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
exports.TokensRes = exports.AccessTokenRes = void 0;
const swagger_1 = require("@nestjs/swagger");
class AccessTokenRes {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImZpcnN0X25hbWUiOiJKaG9uIiwibGFzdF9uYW1lIjoiV2ljayIsInBob3RvIjpudWxsLCJlbWFpbCI6ImZnZGdkZ2RmZUByci50dHQiLCJwaG9uZSI6IjIxMzQzIiwiYWNjb3VudF90eXBlIjoiZW1haWwiLCJpYXQiOjE2NDkwNDYxNjQsImV4cCI6MTY0OTA0OTc2NH0.DSh-IE7q1Z3WOmm8YIOShRpQbzMZ-IvE7L2uCu3q2OM',
        description: 'Токен доступа',
    }),
    __metadata("design:type", String)
], AccessTokenRes.prototype, "access_token", void 0);
exports.AccessTokenRes = AccessTokenRes;
class TokensRes extends AccessTokenRes {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImZpcnN0X25hbWUiOiJKaG9uIiwibGFzdF9uYW1lIjoiV2ljayIsInBob3RvIjpudWxsLCJlbWFpbCI6ImZnZGdkZ2RmZUByci50dHQiLCJwaG9uZSI6IjIxMzQzIiwiYWNjb3VudF90eXBlIjoiZW1haWwiLCJpYXQiOjE2NDkwNDYxNjQsImV4cCI6MTY0OTA0OTc2NH0.DSh-IE7q1Z3WOmm8YIOShRpQbzMZ-IvE7L2uCu3q2OM',
        description: 'Токен обновления',
    }),
    __metadata("design:type", String)
], TokensRes.prototype, "refresh_token", void 0);
exports.TokensRes = TokensRes;
//# sourceMappingURL=tokenRes.credits.js.map