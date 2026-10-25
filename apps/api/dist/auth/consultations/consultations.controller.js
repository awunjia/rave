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
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator.js';
import { DefaultUserRole } from '../../generated/prisma/enums.js';
let ConsultationsController = class ConsultationsController {
    async bookConsultation(dto) {
        return { message: 'Consultation booked successfully by client' };
    }
    async getConsultantSchedule() {
        return { message: 'Consultant schedule retrieved' };
    }
    async verifyDocuments(dto) {
        return { message: 'Document verified by reviewer' };
    }
    async createConsultancyService(dto) {
        return { message: 'Service created by admin' };
    }
};
__decorate([
    Post('book'),
    Roles(DefaultUserRole.CLIENT),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsultationsController.prototype, "bookConsultation", null);
__decorate([
    Get('schedule'),
    Roles(DefaultUserRole.CONSULTANT, DefaultUserRole.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsultationsController.prototype, "getConsultantSchedule", null);
__decorate([
    Post('verify-documents'),
    Roles(DefaultUserRole.REVIEWER, DefaultUserRole.ADMIN),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsultationsController.prototype, "verifyDocuments", null);
__decorate([
    Post('services'),
    Roles(DefaultUserRole.ADMIN),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsultationsController.prototype, "createConsultancyService", null);
ConsultationsController = __decorate([
    Controller('consultations')
], ConsultationsController);
export { ConsultationsController };
//# sourceMappingURL=consultations.controller.js.map