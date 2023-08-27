import { OrderRequest, PaginationRequest } from '.';

import { Tag } from './tag';

export type Article = {
  id: string;
  title: string;
  description: string;
  cover?: string;
  content: string;
  friendly_url: string;
  is_top?: boolean;
  is_published: boolean;
  top_priority?: number;
  tags?: Tag[];
  created_at: string;
  updated_at: string;
  deleted_at?: string;
};

export type CreateArticleRequest = {
  title: string;
  description: string;
  cover?: string;
  content: string;
  friendly_url: string;
  is_top?: boolean;
  top_priority?: number;
  is_published?: boolean;
  tag_ids?: string[];
};

export type GetArticlesRequest = PaginationRequest &
  OrderRequest & {
    title?: string;
    friendly_url?: string;
  };

export type UpdateArticleRequest = Partial<CreateArticleRequest>;
