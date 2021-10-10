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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("./user.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_schema_1 = require("../role/role.schema");
let UserService = class UserService {
    constructor(userModel, roleModel) {
        this.userModel = userModel;
        this.roleModel = roleModel;
    }
    async createUser(dto) {
        const { role } = dto;
        const obj = await this.roleModel.find({ name: role });
        const user = await this.userModel.create(Object.assign(Object.assign({}, dto), { role: obj[0]._id }));
        return user;
    }
    async getUserById(id) {
        const user = await this.userModel.findById(id).populate('role');
        return user;
    }
    async getAll() {
        const users = await this.userModel.find();
        return users;
    }
    async getRegisterUser(dto) {
        const { login, password } = dto;
        const user = await this.userModel.find({ login, password }).populate('role');
        if (Object.keys(user).length) {
            return {
                user: user[0],
                exist: true
            };
        }
        else {
            return { exist: false };
        }
    }
    async deleteUserById(id) {
        await this.userModel.findByIdAndDelete(id);
        return "Successes delete " + id;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(role_schema_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map