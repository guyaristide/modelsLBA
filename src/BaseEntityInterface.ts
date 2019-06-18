export interface BaseEntityInterface {
    id?: string;
    createdAt? : Date;
    lastUpdated?: Date;
    deleted?: boolean;
    deletedAt? : Date;
    isActive? : boolean;
}