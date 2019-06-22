import {BaseEntityInterface} from "./BaseEntityInterface";
import {ICloudImage} from "./ICloudImage";

export interface IPartner extends BaseEntityInterface{
    name: string;
    description?: string;
    full_description?: string;
    link?: string;
    image?: ICloudImage;
}
