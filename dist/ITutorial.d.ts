import { BaseEntityInterface } from "./BaseEntityInterface";
import { ICloudImage } from "./ICloudImage";
export interface ITutorial extends BaseEntityInterface {
    label: string;
    description: string;
    full_description?: string;
    professionsIds?: string[];
    tags?: string[];
    cover?: ICloudImage;
}
