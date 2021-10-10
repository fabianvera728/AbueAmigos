import { User } from '../user/user/user';
export interface Session{
    token?: string;
    user?: User;
}
