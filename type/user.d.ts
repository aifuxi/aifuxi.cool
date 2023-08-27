import { OrderRequest, PaginationRequest } from '.';

export type User = {
  id: string;
  nickname: string;
  avatar?: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
};

export type CreateUserRequest = {
  nickname: string;
  avatar?: string;
  friendly_url: string;
};

export type GetUsersRequest = PaginationRequest &
  OrderRequest & {
    password?: string;
    re_password?: string;
  };

export type UpdateUserRequest = Partial<CreateUserRequest>;
