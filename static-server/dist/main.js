"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("./conf/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('/api');
    (0, swagger_1.Swagger)(app);
    app.enableCors({
        optionsSuccessStatus: 200,
        origin: JSON.parse(process.env.CORS_ORIGIN),
    });
    await app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map