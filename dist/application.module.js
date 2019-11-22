"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const glob_1 = __importDefault(require("glob"));
const controllers = glob_1.default.sync('*.module/*-controller.ts', { cwd: __dirname, absolute: true }) // go through all the modules containing controllers
    .map(require) // require every one of them
    .map(imported => imported.default);
// and return each one's default export (which is expected to be a NestJS controller class)
let ApplicationModule = class ApplicationModule {
    configure(consumer) {
        consumer.apply(cookie_parser_1.default()).forRoutes('/');
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        controllers
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=application.module.js.map