export declare class ConsultationsController {
    bookConsultation(dto: any): Promise<{
        message: string;
    }>;
    getConsultantSchedule(): Promise<{
        message: string;
    }>;
    verifyDocuments(dto: any): Promise<{
        message: string;
    }>;
    createConsultancyService(dto: any): Promise<{
        message: string;
    }>;
}
