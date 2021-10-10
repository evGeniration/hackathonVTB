"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampledataService = void 0;
const common_1 = require("@nestjs/common");
const random_words_1 = require("random-words");
let SampledataService = class SampledataService {
    getRandomNumber() {
        let from = 0;
        let to = 100;
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
    getRandomString() {
        return (0, random_words_1.randomWords)();
    }
    getRandomDate() {
        let from = new Date('1950-02-12T01:57:45.271Z');
        let to = new Date('2001-02-12T01:57:45.271Z');
        return new Date(Math.random() * (to.getTime() - from.getTime() + 1) + from.getTime());
    }
};
SampledataService = __decorate([
    (0, common_1.Injectable)()
], SampledataService);
exports.SampledataService = SampledataService;
//# sourceMappingURL=sampledata.service.js.map