import { BaseEntityInterface } from "./BaseEntityInterface";

export interface ITutorial extends BaseEntityInterface {
  lablel: string;
  description: string;
  full_description?: string;
  professionsIds?: string[];
  tags?:string[];
}
