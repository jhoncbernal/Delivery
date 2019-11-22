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
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const route_1 = require("../lib/route");
class DronPost {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DronPost.prototype, "chaRotateLeft", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DronPost.prototype, "chaRotateRigth", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DronPost.prototype, "chaAdvance", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DronPost.prototype, "strMainPath", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DronPost.prototype, "strNameFileOutput", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DronPost.prototype, "strNameFileInput", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], DronPost.prototype, "intMaxRoutes", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], DronPost.prototype, "arriPosition", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], DronPost.prototype, "arrsNamePosition", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], DronPost.prototype, "arriInitialPosition", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], DronPost.prototype, "intRange", void 0);
exports.DronPost = DronPost;
exports.dronPosts = JSON.parse(JSON.stringify(new route_1.Route('I', 'D', 'A', "main", "in", "out", 3, [0, 0, 0], [0, 0, 0], 10)));
console.log(exports.dronPosts);
let DronPostController = class DronPostController {
    findAll() {
        return exports.dronPosts;
    }
};
__decorate([
    common_1.Get() // registers a `-posts` GET method on the API
    ,
    swagger_1.ApiResponse({ type: DronPost, status: 200, isArray: true }) // for Swagger documentation: API returns an array of  models
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DronPostController.prototype, "findAll", null);
DronPostController = __decorate([
    common_1.Controller('dron-posts')
], DronPostController);
exports.default = DronPostController;
//# sourceMappingURL=dron-post-controller.js.map