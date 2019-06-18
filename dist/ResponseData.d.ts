export declare class ResponseData {
    status_code: number;
    total?: number;
    status_message: string;
    data: any;
    errors?: any;
    constructor(code: number, message: string, data?: any, errors?: any);
}
