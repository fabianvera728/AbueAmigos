/* eslint-disable @typescript-eslint/naming-convention */
export interface User{
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    username?: string;
    phone_number?: string;
    password?: string;
    user: {
        first_name: string;
        last_name: string;
        username: string;
    };
}
