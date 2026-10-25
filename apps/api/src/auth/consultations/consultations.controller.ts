import { Controller, Get, Post, Body } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator.js';
import { DefaultUserRole } from '../../generated/prisma/enums.js';

@Controller('consultations')
export class ConsultationsController {

    // 1. CLIENT: Can book & pay for a consultation (Online or In-person)
    @Post('book')
    @Roles(DefaultUserRole.CLIENT)
    async bookConsultation(@Body() dto: any) {
        return { message: 'Consultation booked successfully by client' };
    }

    // 2. CONSULTANT: Can view assigned sessions and meetings
    @Get('schedule')
    @Roles(DefaultUserRole.CONSULTANT, DefaultUserRole.ADMIN)
    async getConsultantSchedule() {
        return { message: 'Consultant schedule retrieved' };
    }

    // 3. REVIEWER: Can inspect and verify client documents
    @Post('verify-documents')
    @Roles(DefaultUserRole.REVIEWER, DefaultUserRole.ADMIN)
    async verifyDocuments(@Body() dto: any) {
        return { message: 'Document verified by reviewer' };
    }

    // 4. ADMIN: Full control over services, pricing, and system analytics
    @Post('services')
    @Roles(DefaultUserRole.ADMIN)
    async createConsultancyService(@Body() dto: any) {
        return { message: 'Service created by admin' };
    }
}