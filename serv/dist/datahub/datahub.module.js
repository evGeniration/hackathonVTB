"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatahubModule = void 0;
const common_1 = require("@nestjs/common");
const datahub_controller_1 = require("./datahub.controller");
const datahub_service_1 = require("./datahub.service");
let DatahubModule = class DatahubModule {
};
DatahubModule = __decorate([
    (0, common_1.Module)({
        controllers: [datahub_controller_1.DatahubController],
        providers: [datahub_service_1.DatahubService]
    })
], DatahubModule);
exports.DatahubModule = DatahubModule;
//# sourceMappingURL=datahub.module.js.map