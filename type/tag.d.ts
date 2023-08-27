import { OrderRequest, PaginationRequest } from '.';

export type Tag = {
  id: string;
  name: string;
  friendly_url: string;
  article_count: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
};

export type CreateTagRequest = {
  name: string;
  friendly_url: string;
};

export type GetTagsRequest = PaginationRequest &
  OrderRequest &
  Partial<CreateTagRequest>;

export type UpdateTagRequest = Partial<CreateTagRequest>;
