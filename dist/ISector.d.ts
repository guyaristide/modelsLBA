import { BaseEntityInterface } from "./BaseEntityInterface";
import { ICloudImage } from "./ICloudImage";
export interface ISector extends BaseEntityInterface {
    label: string;
    icon?: ICloudImage;
    description?: string;
    full_description?: string;
}
