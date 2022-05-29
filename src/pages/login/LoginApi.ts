import {instance} from '../../api/Api';

export type LoginType = {
    email: string;
    password: string;
    rememberMe: boolean
}

export const userApi = {
    login(login: LoginType) {
        return instance.post<LoginType>('auth/login', login)
    }
}
