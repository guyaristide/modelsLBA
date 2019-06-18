import { BaseEntityInterface } from "./BaseEntityInterface";
export interface ICountry extends BaseEntityInterface {
    name: string;
    countinentId?: string;
    flag?: string;
}
