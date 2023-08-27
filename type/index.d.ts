import { User } from './user';

type SignInRequest = {
  email: string;
  password: string;
};
type SignInResponse = {
  access_token: string;
  user: User;
};

export type GeneralResponse<T> = {
  code: number;
  data?: T;
  msg?: string;
};

export type TotalResponse<T> = GeneralResponse<T> & {
  total: number;
};

export type PaginationRequest = {
  page: number;
  page_size: number;
};

export type OrderRequest = {
  order: 'desc' | 'asc';
  order_by: 'created_at' | 'updated_at';
};
