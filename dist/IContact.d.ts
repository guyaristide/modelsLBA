import { BaseEntityInterface } from "./BaseEntityInterface";
export interface IContact extends BaseEntityInterface {
    tel?: string;
    phone1?: string;
    phone2?: string;
    adresse?: string;
}
