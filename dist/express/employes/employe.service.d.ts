/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
export declare class CreateEmployeDto {
    readonly name: string;
    readonly adimissionDate: string;
    readonly office: string;
    readonly departament: string;
    readonly userId: string;
}
export declare class EmployesService {
    createEmployes(body: CreateEmployeDto): Promise<any>;
    getEmployes(page: any, userId: any): Promise<{
        data: any[];
        pageInfo: {
            page: any;
            pageSize: number;
            totalPages: number;
            totalDocuments: number;
        };
    }>;
    getEmploye(id: string): Promise<any>;
    deleteEmploye(): Promise<import("mongodb").DeleteResult>;
    deleteOneEmploye(id: string): Promise<import("mongodb").DeleteResult>;
    updateEmploye(id: string, body: CreateEmployeDto): Promise<import("mongoose").UpdateWriteOpResult>;
}
