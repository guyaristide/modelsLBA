import { BaseEntityInterface } from "./BaseEntityInterface";
import { ICloudImage } from "./ICloudImage";
export interface IAccountType extends BaseEntityInterface {
    label: string;
    description?: string;
    icon?: ICloudImage;
}
