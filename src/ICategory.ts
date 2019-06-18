import { BaseEntityInterface } from "./BaseEntityInterface";
import { ICloudImage } from "./ICloudImage";

export interface ICategory extends BaseEntityInterface {
  label: string;
  description?: string;
  full_description?: string;
  image?: ICloudImage;
}
