import { BaseEntityInterface } from "./BaseEntityInterface";

export interface IRole extends BaseEntityInterface {
    name?: string;
    permissionsIds? : string[];
}
