import { BaseEntityInterface } from "./BaseEntityInterface";
import { ICloudImage } from "./ICloudImage";
export interface IProfession extends BaseEntityInterface {
    label: string;
    description?: string;
    full_description?: string;
    sectorId?: string;
    image?: ICloudImage;
}
