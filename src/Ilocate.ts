import { BaseEntityInterface } from "./BaseEntityInterface";

export interface ILocate extends BaseEntityInterface {
  longitude?: string;
  latitude?: string;
  details?: string;
  street?: string;
}
