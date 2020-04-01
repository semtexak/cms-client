import { Entity } from './base/entity.model';

export interface User extends Entity {
    email: string;
    roles: string[];
}