import {BaseEntityInterface} from "./BaseEntityInterface";

export interface ILanguage extends BaseEntityInterface {
    code?:string;
    name: string;
    tags?:string[];
}
