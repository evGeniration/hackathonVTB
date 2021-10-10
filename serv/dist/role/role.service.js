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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const role_schema_1 = require("./role.schema");
const mongoose_2 = require("@nestjs/mongoose");
let RoleService = class RoleService {
    constructor(roleModel) {
        this.roleModel = roleModel;
    }
    async createRole(dto) {
        const role = await this.roleModel.create(dto);
        return role;
    }
    async deleteRole(id) {
        await this.roleModel.findByIdAndDelete(id);
        return `Delete role ${id}`;
    }
    async getAllRoles() {
        const roles = await this.roleModel.find();
        return roles;
    }
    async updateRole(id, data) {
        const role = await this.roleModel.findByIdAndUpdate(id, data);
        role.save();
        return role;
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(role_schema_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map