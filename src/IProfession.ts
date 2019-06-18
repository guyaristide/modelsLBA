import { BaseEntityInterface } from "./BaseEntityInterface";
import { ICloudImage } from "./ICloudImage";

export interface IProfession extends BaseEntityInterface {
    label: string;
    description?: string;
    descriptionComplete?: string;
    sectorId?: string;
    image?: ICloudImage;
}