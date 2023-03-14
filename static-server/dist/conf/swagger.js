"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const Swagger = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Back')
        .setDescription('Документация back')
        .setVersion('1.0.0')
        .addTag('back')
        .addCookieAuth()
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/swagger', app, document);
};
exports.Swagger = Swagger;
//# sourceMappingURL=swagger.js.map