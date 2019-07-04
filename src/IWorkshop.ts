import {BaseEntityInterface} from "./BaseEntityInterface";
import {ICloudImage} from "./ICloudImage";
import {ILocate} from "./Ilocate";

export interface IWorkshop extends BaseEntityInterface {
    logo?: ICloudImage;
    banner?: ICloudImage;
    creationDate?: Date;
    slogan?: string;
    tradeName?: string;
    tags?: string[];
    emailPro: string;
    locate?: ILocate;

}
