export enum Env {
    Development = "development",
    Production = "production",
}

export enum RequestMethod {
    POST = 1,
    GET = 2,
}

export interface LoginForm{
    username: string;
    password: string;
}



