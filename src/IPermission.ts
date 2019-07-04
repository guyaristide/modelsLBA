import {BaseEntityInterface} from "./BaseEntityInterface";

export interface IPermission extends BaseEntityInterface {
    name: string;
    guardName?: string;
}
