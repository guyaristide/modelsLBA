import { BaseEntityInterface } from "./BaseEntityInterface";
import { ILocate } from "./Ilocate";
import { ICloudImage } from "./ICloudImage";
export interface IAdministrateur extends BaseEntityInterface {
    email: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    birthDate?: string;
    locate?: ILocate;
    countryId?: string;
    cityId?: string;
    avatar?: ICloudImage;
    creationDate?: Date;
    rolesIds?: number[];
}
