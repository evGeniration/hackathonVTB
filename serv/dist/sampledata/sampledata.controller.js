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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampledataController = void 0;
const common_1 = require("@nestjs/common");
const sampledata_service_1 = require("./sampledata.service");
let SampledataController = class SampledataController {
    constructor(sampledataService) {
        this.sampledataService = sampledataService;
    }
    getTableByTd(urn) {
    }
};
__decorate([
    (0, common_1.Get)(':urn'),
    __param(0, (0, common_1.Param)('urn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SampledataController.prototype, "getTableByTd", null);
SampledataController = __decorate([
    (0, common_1.Controller)('/table'),
    __metadata("design:paramtypes", [sampledata_service_1.SampledataService])
], SampledataController);
exports.SampledataController = SampledataController;
//# sourceMappingURL=sampledata.controller.js.map