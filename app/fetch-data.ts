import { HttpMethod } from '@/constants';
import { GeneralResponse, TotalResponse } from '@/type';
import { Article, GetArticlesRequest } from '@/type/article';
import { GetTagsRequest, Tag } from '@/type/tag';
import { obj2QueryString } from '@/utils';

const BASE_URL = 'http://localhost:9003/api';

export function getArticles() {
  const req: GetArticlesRequest = {
    page: 1,
    page_size: 10,
    order: 'desc',
    order_by: 'created_at',
  };
  return fetch(`${BASE_URL}/articles${obj2QueryString(req)}`, {
    method: HttpMethod.GET,
  }).then((res) => res.json()) as unknown as Promise<TotalResponse<Article[]>>;
}

export function getArticleByFriendlyUrl(friendlyUrl: string) {
  return fetch(`${BASE_URL}/articles/${friendlyUrl}`, {
    method: HttpMethod.GET,
  }).then((res) => res.json()) as unknown as Promise<GeneralResponse<Article>>;
}

export function getTags() {
  const req: GetTagsRequest = {
    page: 1,
    page_size: 100,
    order: 'desc',
    order_by: 'created_at',
  };
  return fetch(`${BASE_URL}/tags${obj2QueryString(req)}`, {
    method: HttpMethod.GET,
  }).then((res) => res.json()) as unknown as Promise<TotalResponse<Tag[]>>;
}
