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
import { CreateEmployeDto, EmployesService } from './employe.service';
export declare class EmployesController {
    private readonly appService;
    constructor(appService: EmployesService);
    createEmployes(body: CreateEmployeDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/employes").Employes> & import("../schemas/employes").Employes & Required<{
        _id: unknown;
    }>>;
    updateEmploye(param: any, body: CreateEmployeDto): Promise<import("mongoose").UpdateWriteOpResult>;
    getEmployes(page: any, userId: any): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("../schemas/employes").Employes> & import("../schemas/employes").Employes & Required<{
            _id: unknown;
        }>)[];
        pageInfo: {
            page: any;
            pageSize: number;
            totalPages: number;
            totalDocuments: number;
        };
    }>;
    getEmploye(param: any): Promise<import("mongoose").Document<unknown, {}, import("../schemas/employes").Employes> & import("../schemas/employes").Employes & Required<{
        _id: unknown;
    }>>;
    delete(): Promise<import("mongodb").DeleteResult>;
    deleteOne(id: string): Promise<import("mongodb").DeleteResult>;
}
