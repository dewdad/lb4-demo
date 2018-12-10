import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    email: string;
    password: string;
    firstname?: string;
    surname?: string;
    constructor(data?: Partial<User>);
}
