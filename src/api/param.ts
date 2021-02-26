export enum Env {
  Development = 'development',
  Production = 'production'
}

export enum RequestMethod {
  POST = 1,
  GET = 2
}

export interface MyResponse {
  code: number
  // @typescript-eslint/no-explicit-any
  data: any
  message: string
}

export interface LoginForm {
  username: string
  password: string
}

export interface MenuForm {
  title: string;
  name: string;
}
