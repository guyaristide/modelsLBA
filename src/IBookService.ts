import {BaseEntityInterface} from "./BaseEntityInterface";
import {ICloudImage} from "./ICloudImage";

export interface IBookService extends BaseEntityInterface {
    link?: string;
    //link label
    label?: string;
    cover: ICloudImage;
    //description hover
    text?: string;
    tags?: string[];
}
