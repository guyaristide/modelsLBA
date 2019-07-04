import {BaseEntityInterface} from "./BaseEntityInterface";
import {ILocate} from "./Ilocate";
import {ICloudImage} from "./ICloudImage";

export interface IUser extends BaseEntityInterface {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    locate?: ILocate;
    countryId?: string;
    cityId?: string;
    neighborhood?: string;
    avatar?: ICloudImage;
    token?: string;
    emailConfirmed?: boolean;
}
