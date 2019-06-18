import { BaseEntityInterface } from "./BaseEntityInterface";

export interface ICity extends BaseEntityInterface {
    name: string;
    countryId?: string;
    municipality?: string;
}
