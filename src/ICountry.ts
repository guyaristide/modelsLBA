import { BaseEntityInterface } from "./BaseEntityInterface";

export interface ICountry extends BaseEntityInterface {
    name: string;
    countinentId?: string;
    //Base64
    flag?: string;
    
}
