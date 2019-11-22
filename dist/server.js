"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const application_module_1 = require("./application.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(application_module_1.ApplicationModule); // Application module created in the step before
        app.useGlobalPipes(new common_1.ValidationPipe()); // Makes use of class-validate to sanitize data entering the API
        // Creates Swagger documentation and OpenAPI console on the root path (http://localhost:3000)
        const swaggerOptions = new swagger_1.DocumentBuilder().build();
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
        swagger_1.SwaggerModule.setup('/', app, document);
        yield app.listen(3000);
    });
}
bootstrap().catch(console.error);
//# sourceMappingURL=server.js.map