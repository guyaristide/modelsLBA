import {BaseEntityInterface} from "./BaseEntityInterface";
import {ICloudImage} from "./ICloudImage";

export interface IContact extends BaseEntityInterface {
    tel?: string;
    phone1?: string;
    phone2?: string;
    adresse?: string;
    email?: string;
    fax?: string;
    gender?: string;
    avatar?: ICloudImage;
}
