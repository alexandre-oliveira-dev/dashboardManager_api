"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const appOptions = { cors: true };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, appOptions);
    app.setGlobalPrefix('api');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Dashboard Manager api')
        .setVersion('1.0')
        .setBasePath('/')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/docs', app, document);
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map